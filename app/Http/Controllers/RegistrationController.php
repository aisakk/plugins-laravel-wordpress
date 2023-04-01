<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Services\EmailVerificationService;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    public function register(Request $request)
    {
            $request->validate([
                  'email' => 'required|email|unique:users',
                  'username' => 'required|unique:users',
                  'password' => 'required|min:8',
            ]);

            $user = new User([
                  'email' => $request->input('email'),
                  'username' => $request->input('username'),
                  'password' => Hash::make($request->input('password')),
            ]);

            $user->save();

            // Encripta la contraseña y guarda el usuario
            $user->password = Hash::make($request->input('password'));
            $user->save();

            // En lugar de redireccionar a la página de inicio de sesión, envía el correo de verificación y redirecciona a la página de ingreso del código
            EmailVerificationService::sendVerificationCode($user);

            return redirect()->route('email-verification.code.show', ['email' => $user->email]);
      }

      public function showRegistrationForm()
      {
            return Inertia::render('Register');
      }
}