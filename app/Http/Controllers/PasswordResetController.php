<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\PasswordResetNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordResetController extends Controller
{
    public function showResetForm()
    {
        return view('password_reset');
    }

    public function sendResetEmail(Request $request)
    {
            $request->validate([
            'identifier' => 'required',
            ]);
            $identifier = $request->input('identifier');
            $user = User::where('email', $identifier)->orWhere('username', $identifier)->first();

            if (!$user) {
                  return back()->withErrors(['error' => 'Usuario no encontrado.']);
            }

            $token = md5(uniqid(rand(), true));
            $user->password_reset_token = $token;
            $user->save();

            $user->notify(new PasswordResetNotification($token));

            return back()->with('message', 'Correo electrónico de restablecimiento de contraseña enviado.');
      }

      public function showUpdateForm($token)
      {
            $user = User::where('password_reset_token', $token)->first();

            if (!$user) {
                  return abort(404);
            }

            return view('update_password', ['token' => $token]);
      }

      public function updatePassword(Request $request)
      {
            $request->validate([
                  'token' => 'required',
                  'password' => 'required|min:8|confirmed',
            ]);

            $user = User::where('password_reset_token', $request->input('token'))->first();

            if (!$user) {
                  return back()->withErrors(['error' => 'Token no válido.']);
            }

            $user->password = Hash::make($request->input('password'));
            $user->password_reset_token = null;
            $user->save();

            return redirect()->route('login')->with('message', 'Contraseña actualizada exitosamente.');
      }
}