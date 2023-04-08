<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\License;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function licenses(){
        $licenses=License::all();
        $licensesArray = $licenses->map(function ($license) {
            $expirationDate = Carbon::createFromFormat('Y-m-d', $license->expiration)->format('d M Y');
            return [
                'date' => $license->created_at->format('d M Y'),
                'code' => $license->licence_key,
                'name' => $license->plugin->name,
                'expiration' => $expirationDate,
                'domains' => $license->domain,
                'status' => $license->status ? 'Active' : 'Inactive',
            ];
        })->toArray();

        return Inertia::render('Pages/Licenses',['licenses'=>$licensesArray]);
    }
    public function index($licenseId){
        $license=License::findOrFail($licenseId);
        $expirationDate = Carbon::createFromFormat('Y-m-d', $license->expiration)->format('d M Y');
        $license->date = $license->created_at->format('d M Y');
        $license->code = $license->licence_key;
        $license->name = $license->plugin->name;
        $license->expiration = $expirationDate;
        $license->domains = $license->domain;
        $license->status = $license->status ? 'Active' : 'Inactive';
        return Inertia::render('Pages/Plan',['license'=>$license]);
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
