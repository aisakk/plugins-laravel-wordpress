<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\License;

class DashboardController extends Controller
{
    public function licenses(){
        $licenses=License::all();
        $licensesArray = $licenses->map(function ($license) {
            return [
                'date' => $license->created_at->format('d M Y'),
                'code' => $license->licence_key,
                'name' => $license->plugin->name,
                'expiration' => $license->expiration,
                'domains' => $license->domain,
                'status' => $license->status ? 'Active' : 'Inactive',
            ];
        })->toArray();
        // return $licensesArray;
        return Inertia::render('Pages/Licenses',['licenses'=>$licensesArray]);
    }
    public function index(){
        return Inertia::render('Pages/Plan');
    }
    public function domains(){
        return Inertia::render('Pages/Domains');
    }
    public function settings($licenseId){
        return Inertia::render('Pages/Settings');
    }
    public function details(){
        return Inertia::render('Pages/Details');
    }
}
