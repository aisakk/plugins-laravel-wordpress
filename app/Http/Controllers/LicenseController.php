<?php

namespace App\Http\Controllers;

use App\Events\LicenseNotificationEvent;
use App\Listeners\SendLicenseNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use App\Models\License;
use App\Models\Notifications;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class LicenseController extends Controller
{
    public function notification(Request $request){
        $searchAllLicence = License::where('user_id', '=', Auth::id())->get();
        $today = Carbon::now()->startOfDay();
        foreach ($searchAllLicence as $license) {
            // Convierte la fecha de expiración a un objeto Carbon y establece la hora, minutos y segundos en 0
            $expiration = Carbon::parse($license->expiration)->startOfDay();
            if($today > $expiration){
                event(new LicenseNotificationEvent($license, Auth::user(), 'expired'));
            }
            // Compara la fecha de expiración con la fecha actual
        }

        $searchNotification = Notifications::where('user_id', '=', Auth::id())->get();
        return response()->json($searchNotification);
    }
    public function store(Request $request)
    {
        try {
            $secretKey = "aesEncryptionKeyaesEncryptionKey";
            $data = $request->input('license_data');
            $decryptedData=$this->decrypt($data,$secretKey);

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        // expected decryptedData {licence_key:"XFJAY-XPOE-NCCS",status:1,expiration:"2024-02-15",max_domains:3,user_id:1,plugin_id:1}
        // Convert encoded json to asociative array
        $license_data = json_decode($decryptedData, true);
        $license = new License($license_data);
        event(new LicenseNotificationEvent($license, Auth::user(), 'new'));
        $license->save();
        return response()->json(['success' => true, 'data'=>$license]);
    }

    private function decrypt($data, $secretKey)
    {
        $combinedData = base64_decode($data);
        $iv = substr($combinedData, 0, 16);
        $encryptedData = substr($combinedData, 16);
        return openssl_decrypt($encryptedData, 'AES-256-CBC', $secretKey, OPENSSL_RAW_DATA, $iv);
    }

    private function encrypt($data, $secretKey)
    {
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('AES-256-CBC'));
        $encryptedData = openssl_encrypt($data, 'AES-256-CBC', $secretKey, OPENSSL_RAW_DATA, $iv);
        return base64_encode($iv . $encryptedData);
    }

    public function create(Request $request){
        $secretKey = "aesEncryptionKeyaesEncryptionKey";
        $data = $request->input('license_data');
        $encryptedData=$this->encrypt($data,$secretKey);
        return $encryptedData;
    }
}


