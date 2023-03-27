<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController extends Controller
{
    public function show( $user = "Invitado" )
    {
        return Inertia::render('Test', [
          'user' => array( "name" => $user )
        ]);
    }
}