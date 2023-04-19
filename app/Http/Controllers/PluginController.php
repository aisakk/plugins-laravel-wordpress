<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plugin;

class PluginController extends Controller
{
    public function updatePluginInfo(Request $request)
    {
        $secretKey = env('AES256_LICENSE_KEY');
        $data = $request->input('license_data');
        $plugins=$this->decrypt($data,$secretKey);
        $plugins = json_decode($plugins, true);
        if ($plugins) {
            foreach ($plugins as $plugin) {
                Plugin::updateOrCreate($plugin->data);
            }
        }

        return response()->json(['message' => 'Plugin information updated successfully.']);
    }

    private function decrypt($data, $secretKey)
    {
        $combinedData = base64_decode($data);
        $iv = substr($combinedData, 0, 16);
        $encryptedData = substr($combinedData, 16);
        return openssl_decrypt($encryptedData, 'AES-256-CBC', $secretKey, OPENSSL_RAW_DATA, $iv);
    }
}
