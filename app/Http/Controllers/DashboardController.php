<?php

namespace App\Http\Controllers;

use App\Http\Resources\LicenseResource;
use Illuminate\Http\Request;
use App\Models\License;
use App\Models\Plugin;
use Inertia\Inertia;
use App\Models\Log;
use App\Http\Resources\PluginResource;

class DashboardController extends Controller
{
    public function licenses()
    {
        $plugins = Plugin::all();
        $licenses = License::all();

        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licensesArray = LicenseResource::collection($licenses)->toArray(request());
        // return $pluginsArray;
        return Inertia::render('Pages/Licenses', ['licenses' => $licensesArray, 'plugins'=>$pluginsArray]);
    }

    public function index($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Plan', ['licenseId'=>$licenseId,'license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }

    public function settings($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/ChatBtnSettings', ['licenseId'=>$licenseId,'license' => $licenseResource,'plugins'=>$pluginsArray]);
    }

    public function installation($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Installation', ['licenseId'=>$licenseId,'license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }

    public function logs($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $logs = Log::where('license_id', $licenseId)->get();
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Logs', ['licenseId'=>$licenseId,'logs' => $logs, 'license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }

    public function allPlugins()
    {
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());

        return Inertia::render('Pages/AllPlugins', ['plugins'=>$pluginsArray]);
    }

    public function pluginDetails($pluginId)
    {
        $plugin = Plugin::findOrFail($pluginId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());

        return Inertia::render('Pages/PluginDetails', ['plugins'=>$pluginsArray,'plugin'=>$plugin]);
    }
}
