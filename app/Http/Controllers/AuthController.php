<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
      public function showLoginForm()
      {
            return Inertia::render('Login');
      }

      public function login(Request $request)
      {
            $credentials = $request->only('identifier', 'password');
            $identifier = $request->input('identifier');

            $user = User::where('email', $identifier)->orWhere('username', $identifier)->first();

            if ($user && Auth::attempt(['email' => $user->email, 'password' => $credentials['password']], $request->input('remember'))) {
                  // Autenticación exitosa
                  return redirect()->intended('dashboard');
            }

            // Autenticación fallida
            return back()->withErrors(['error' => 'Credenciales incorrectas.']);
      }

      public function logout()
      {
            Auth::logout();
            return redirect('/');
      }
}
