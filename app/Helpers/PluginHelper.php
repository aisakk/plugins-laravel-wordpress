<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;

class PluginHelper
{
    public static function extractPluginName(string $readmeFilePath): ?object
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
