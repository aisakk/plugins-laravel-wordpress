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
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Plan', ['license' => $licenseResource]);
    }


    public function settings($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Settings', ['license' => $licenseResource]);
    }

    public function installation($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Installation', ['license' => $licenseResource]);
    }
    public function logs($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $logs = Log::where('license_id', $licenseId)->get();
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Logs', ['logs' => $logs, 'license' => $licenseResource]);
    }
}
