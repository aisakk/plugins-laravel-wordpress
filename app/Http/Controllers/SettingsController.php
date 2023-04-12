<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LicenseMeta;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class SettingsController extends Controller
{
    public function store(Request $request,$licenseId){

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
                return $this->httpPost($url,$secretKey);
            }
        }
        // return Redirect::route('dashboard.settings', ['licenseId'=>$licenseId]);
    }

    private function httpPost($url,$secretKey)
    {
        $keyId="octonove";
        $header = [
            "alg" => "HS256",
            "typ" => "JWT",
            "kid" => $keyId,
        ];
        // Payload data
        $payload = [
            'url' => 'https://www.octonove.com/update_widget_ejemplo',
            "iat" => time(),
            "exp" => time() + (60 * 60) // Expira en 1 hora
         ];
        // Encode the token
        $jwt = JWT::encode($payload, $secretKey, 'HS256',null,$header);

        // Obtén el token CSRF de Laravel
        $csrf=Session::token();
        // Añade el token CSRF a los datos POST
        $postFields = [
            'jwt' => urlencode($jwt),
            '_token' => urlencode($csrf)
        ];
        // Convierte los datos POST en una cadena de consulta
        $postFieldsString = http_build_query($postFields);
        // return $csrf;

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS,$postFieldsString);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;

        // Json to PHP Object
        $responseObj = json_decode($response);
        return $responseObj;
        // Verify status
        if ($responseObj->status === 0) {
            //Success
            return "Operación exitosa.";
        } elseif ($responseObj->status < 0) {
            switch ($responseObj->status) {
                case -1:
                    return "Error: El código de error -1 ocurrió.";
                    break;
                case -2:
                    return "Error: El código de error -2 ocurrió.";
                    break;
                default:
                    return "Error desconocido: " . $responseObj->status;
            }
        } else {
            // Unespected "status"
            return "Error: Valor de 'status' inesperado.";
        }

    }


    public function jwtDecode(){
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
