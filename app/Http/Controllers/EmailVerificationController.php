<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\EmailVerificationNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Services\EmailVerificationService;
use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    public function showEmailForm()
    {
            return Inertia::render('EmailVerificationForm');
    }

      public function sendVerificationEmail(Request $request)
      {
            $request->validate(['email' => 'required|email']);
      
            $user = User::where('email', $request->input('email'))->first();
      
            if (!$user) {
                  return back()->withErrors(['error' => 'Usuario no encontrado.']);
            }
      
            EmailVerificationService::sendVerificationCode($user);
      
            return redirect()->route('email-verification.code.show', ['email' => $user->email]);
      }

      public function showVerificationForm(Request $request)
      {
            $email = $request->input('email') ?? old('email');
            return Inertia::render('VerificationCodeForm', [ 'email' => $email ]);
      }

      public function verify(Request $request)
      {
            $request->validate([
                  'email' => 'required|email',
                  'verification_code' => 'required',
            ]);

            $user = User::where('email', $request->input('email'))->first();

            if (!$user) {
                  return back()->withErrors(['error' => 'Usuario no encontrado.']);
            }

            if (Hash::check($request->input('verification_code'), $user->verification_code)) {
                  $user->email_last_verification = now();
                  $user->verification_code = null;
                  $user->save();

                  return redirect()->intended('dashboard');
            }

            return back()->withErrors(['error' => 'Código de verificación incorrecto.']);
      }

}
