<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;

class PluginHelper
{
    public static function extractPluginNames(string $pluginsFolderPath): array
    {
        // Inicializar un array para almacenar los objetos de plugins
        $plugins = [];

        // Verificar si el directorio proporcionado existe
        if (!File::isDirectory($pluginsFolderPath)) {
            return $plugins;
        }

        // Iterar sobre todas las carpetas dentro del directorio de plugins
        $pluginDirectories = File::directories($pluginsFolderPath);
        foreach ($pluginDirectories as $directory) {
            // Buscar el archivo readme.txt en cada carpeta
            $readmeFilePath = $directory . DIRECTORY_SEPARATOR . 'readme.txt';

            // Extraer el nombre del plugin y agregar el objeto a la colección de plugins
            $plugin = self::extractPluginName($readmeFilePath);
            if ($plugin) {
                $plugins[] = $plugin;
            }
        }

        // Devolver la colección de objetos de plugins
        return $plugins;
    }

    private static function extractPluginName(string $readmeFilePath): ?object
    {
        if (!File::exists($readmeFilePath)) {
            return null;
        }

        $readmeContent = File::get($readmeFilePath);
        $matches = [];
        preg_match('/===\s+(.*?)\s+===/', $readmeContent, $matches);

        if (count($matches) < 2) {
            return null;
        }

        $pluginName = trim($matches[1]);
        $plugin = new \stdClass();
        $plugin->name = $pluginName;

        return $plugin;
    }
}
