<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        return Inertia::render('Pages/Dashboard');
    }
    public function domains(){
        return Inertia::render('Pages/Domains');
    }
    public function settings($licenseId){

        return $licenseId;
        return Inertia::render('Pages/Settings');
    }
    public function details(){
        return Inertia::render('Pages/Details');
    }
}
