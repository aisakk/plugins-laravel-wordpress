<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LicenseMeta;
use Illuminate\Support\Facades\Redirect;

class SettingsController extends Controller
{
    public function store(Request $request,$licenseId){

        $setting=LicenseMeta::create([
            'meta_key'=>$request->meta_key,
            'meta_value'=> json_encode($request->meta_value),
            'license_id'=>(int)$licenseId
        ]);
        return Redirect::route('dashboard.settings', ['licenseId'=>$licenseId]);
    }
}
