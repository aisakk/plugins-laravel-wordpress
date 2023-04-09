<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\License;
use App\Http\Resources\LicenseResource;

class DashboardController extends Controller
{
    public function licenses()
    {
        $licenses = License::all();
        $licensesArray = LicenseResource::collection($licenses)->toArray(request());

        return Inertia::render('Pages/Licenses', ['licenses' => $licensesArray]);
    }

    public function index($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());

        return Inertia::render('Pages/Plan', ['license' => $licenseResource]);
    }

    public function domains($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());
        // return $licenseResource;
        return Inertia::render('Pages/Domains', ['license' => $licenseResource]);
    }

    public function settings($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());
        return Inertia::render('Pages/Settings', ['license' => $licenseResource]);
    }

    public function details($licenseId)
    {
        $license = License::findOrFail($licenseId);
        $licenseResource = (new LicenseResource($license))->toArray(request());
        return Inertia::render('Pages/Details', ['license' => $licenseResource]);
    }
}
