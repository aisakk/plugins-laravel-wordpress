<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LicenseMeta;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Models\Log;

class SettingsController extends Controller
{
    public function store(Request $request,$licenseId)
    {
        $setting=LicenseMeta::create([
            'meta_key'=>$request->meta_key,
            'meta_value'=> json_encode($request->meta_value),
            'license_id'=>(int)$licenseId
        ]);

        $domains=$setting->license->domains;
        foreach($domains as $domain){
            if($domain->active){
                $secretKey=$domain->license->licence_key;
                $url=$domain->name.'/wp-json/octorestapi/v1/update_widget';
                $this->httpPost($url, $secretKey, (int)$licenseId);
            }
        }
        return Redirect::route('dashboard.settings', ['licenseId'=>$licenseId]);
    }

    private function httpPost($url, $secretKey, $licenseId)
    {
        $keyId = "octonove";
        $header = [
            "alg" => "HS256",
            "typ" => "JWT",
            "kid" => $keyId,
        ];

        $payload = [
            'url' => 'https://www.octonove.com/update_widget_ejemplo',
            "iat" => time(),
            "exp" => time() + (60 * 60 * 24 * 30) // Expira en 30 días
        ];

        $jwt = JWT::encode($payload, $secretKey, 'HS256', null, $header);

        $csrf = Session::token();
        $postFields = [
            'jwt' => urlencode($jwt),
            '_token' => urlencode($csrf)
        ];
        $postFieldsString = http_build_query($postFields);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postFieldsString);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        $httpStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        $responseObj = json_decode($response);
        if(!empty($responseObj->status)){
            $action_result='Server response with status: '.$httpStatusCode . ' ' . ($responseObj->status === 0 ? 'Completado correctamente.' : 'Error: ' . $responseObj->status);
        }else{
            $action_result='Server response with status: '.$httpStatusCode;
        }
        $log = new Log([
            'action_name' => 'Hook de Actualización',
            'action_details' => 'Ejecucion de hook de actualizacion en el dominio "' . $url . '"',
            'action_data' => json_encode($payload).', endpoint: ' . $url.' method: POST',
            'action_result' => $action_result,
            'license_id' => $licenseId,
        ]);
        $log->save();
    }

    public function jwtDecode()
    {
        if (isset($_POST['jwt'])) {
            $jwt = $_POST['jwt'];

            // Reemplaza esto con la clave secreta que utilizaste para codificar el JWT
            $secretKey = 'SQQRA-JITG-DMKG';

            try {

                $decoded=JWT::decode($jwt, new Key($secretKey, 'HS256'));
                return response()->json([
                    'jwt'=>$jwt,
                    'status'=>0,
                    'decoded'=>$decoded
                ]);

            } catch (\Firebase\JWT\ExpiredException $e) {
                echo "Error: JWT has expired.\n";
            } catch (\Firebase\JWT\SignatureInvalidException $e) {
                echo "Error: JWT signature is invalid.\n";
            } catch (\Exception $e) {
                echo "Error: " . $e->getMessage() . "\n";
            }

        } else {
            return response()->json([
                'status'=>-1
            ]);
        }
    }

}
