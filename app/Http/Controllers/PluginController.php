<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plugin;
use App\Helpers\PluginHelper;

class PluginController extends Controller
{
    public function updatePluginInfo()
    {
        $readmeFilePath = resource_path('plugins');
        $plugins = PluginHelper::extractPluginNames($readmeFilePath);
        if ($plugins) {
            foreach ($plugins as $plugin) {
                Plugin::updateOrCreate(
                    ['name' => $plugin->name],
                    ['readme_path' => $readmeFilePath]
                );
            }
        }

        return response()->json(['message' => 'Plugin information updated successfully.']);
    }
}
