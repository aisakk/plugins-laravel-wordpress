<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function dashboard(){
        return Inertia::render('Pages/Dashboard');
    }
    public function domains(){
        return Inertia::render('Pages/Domains');
    }
    public function settings(){
        return Inertia::render('Pages/Settings');
    }
    public function details(){
        return Inertia::render('Pages/Details');
    }
}
