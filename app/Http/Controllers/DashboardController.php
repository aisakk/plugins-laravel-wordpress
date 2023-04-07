<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function licenses(){
        return Inertia::render('Pages/Licenses');
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
