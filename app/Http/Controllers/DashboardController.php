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

        return Inertia::render('Pages/Plan', ['license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }


    public function settings($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Settings', ['license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }

    public function installation($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Installation', ['license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }
    public function logs($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $plugins = Plugin::all();
        $pluginsArray = PluginResource::collection($plugins)->toArray(request());
        $logs = Log::where('license_id', $licenseId)->get();
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Logs', ['logs' => $logs, 'license' => $licenseResource, 'plugins'=>$pluginsArray]);
    }
}
