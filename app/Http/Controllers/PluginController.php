<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plugin;
use Illuminate\Support\Facades\File;

class PluginController extends Controller
{
    public function updatePluginInfo(Request $request)
    {

        $secretKey = env('AES256_LICENSE_KEY');
        $data = $request->input('plugin_data');
        $serializedPlugins=$this->decrypt($data,$secretKey);

        $plugins =json_decode($serializedPlugins, true);

        foreach ($plugins as $plugin) {
            $plugin['pricing']=json_encode($plugin['pricing']);
            $plugin['plugin_info']=json_encode($plugin['plugin_info']);
            Plugin::updateOrCreate($plugin);
        }


        return response()->json(['message' => 'Plugin information updated successfully.']);
    }
    public function getReadme(){
        $readmeFilePath = resource_path('plugins/plugin_1/readme.txt');
        if(File::exists($readmeFilePath)){
            $readmeContent=File::get($readmeFilePath);
            $encodedReadmeData = json_encode($readmeContent);
            return $encodedReadmeData;
            return "Exists";
        }
    }

    public function getJsonData()
    {
        $jsonFilePath = resource_path('ejemplos_json/plugins.json');

        if (File::exists($jsonFilePath)) {

            $jsonContent = File::get($jsonFilePath);
            // Decodifica el contenido del archivo JSON
            $encodedJsonData = json_encode($jsonContent);

            // Codifica AES-256 y retorna el dato encriptado
            $secretKey = env('AES256_LICENSE_KEY');
            $encryptedJsonData=$this->encrypt($encodedJsonData,$secretKey);
            return $encryptedJsonData;

        } else {
            // Retorna un mensaje de error si el archivo no existe
            return response()->json(['error' => 'Archivo JSON no encontrado'], 404);
        }
    }


    private function decrypt($data, $secretKey)
    {
        $combinedData = base64_decode($data);
        $iv = substr($combinedData, 0, 16);
        $encryptedData = substr($combinedData, 16);
        $encodedJsonData= openssl_decrypt($encryptedData, 'AES-256-CBC', $secretKey, OPENSSL_RAW_DATA, $iv);
        return json_decode($encodedJsonData, true);
    }
    function encrypt($data, $secretKey)
    {
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('AES-256-CBC'));
        $encryptedData = openssl_encrypt($data, 'AES-256-CBC', $secretKey, OPENSSL_RAW_DATA, $iv);
        return base64_encode($iv . $encryptedData);
    }
}
