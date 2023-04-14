<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Notifications\EmailVerificationLinkNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Services\EmailVerificationService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Str;
use App\Http\Resources\SettingResource;

class AuthController extends Controller
{
      public function showLoginForm()
      {
            return Inertia::render('Login');
      }

      public function login(Request $request)
      {
          $rules = [
              'emailOrUsername' => 'required',
              'password' => 'required|min:8',
              'remember' => 'required|boolean'
          ];

          $request->validate($rules);

          $emailOrUsername = $request->input('emailOrUsername');
          $password = $request->input('password');
          $remember = $request->input('remember');

          $user = User::where('email', $emailOrUsername)->orWhere('username', $emailOrUsername)->first();
          if($user == null){
            return back()->withErrors(['error' => 'No existe el correo o el usuario proporcionado']);
          }
           if ($user && Auth::attempt(['email' => $user->email, 'password' => $password], $remember)) {
                if (!$user->email_last_verification) {
                  // Desconectar al usuario si el correo electrónico no está verificado
                  Auth::logout();
                  $verificationCode = Str::random(32);
                  $user->verification_code = $verificationCode;
                  $user->save();
                  $user->notify(new EmailVerificationLinkNotification($verificationCode));
                  return back()->withErrors(['error' => 'Debe verificar su correo electrónico, le enviamos el enlace nuevamente a su correo.']);
              }
              // Autenticación exitosa
              return redirect()->route('dashboard.licenses');
          }


         return back()->withErrors(['error' => 'La contraseña es Incorrecta']);
      }


      public function register(Request $request){
        $rules = [
            'email_register' => 'required|email',
            'username' => 'required|string',
            'password_register' => 'required|min:8'
        ];
        $request->validate($rules);
        $userEmail= User::where('email', $request->email_register)->first();
        $userName = User::where('username', $request->username)->first();
        $userEmail ? back()->withErrors(['email_register' => 'Correo ya existente']) : null;
        $userName ? back()->withErrors(['username' => 'Usuario ya existente']) : null;

         if($userEmail == null && $userName == null){
            $user = new User([
                'email' => $request->input('email_register'),
                'username' => $request->input('username'),
                'password' => Hash::make($request->input('password_register')),
            ]);
            $verificationCode = Str::random(32);
            $user->verification_code = $verificationCode;
            $user->save();
            $user->notify(new EmailVerificationLinkNotification($verificationCode));
            return redirect()->route('verifyMessage');
        }




      }

      public function verifyEmailThenRegister(){
        return Inertia::render('VerificationEmail',[
            'success' => '',
            'errors' => ''
        ]);
      }

      public function verify(Request $request, $code){
        $user = User::where('verification_code', $code)->first();
        if ($user && !$user->email_last_verification) {
            // Marcar el correo electrónico como verificado y eliminar el código de verificación
            $user->email_last_verification = now();
            $user->verification_code = null;
            $user->save();
            return Inertia::render('VerificationEmail', [
                'success' => 'Correo electrónico verificado con éxito.',
                'errors' => ''
            ]);
        }
         return Inertia::render('VerificationEmail', [
                'errors' => 'Error el usuario ha sido verificado anteriormente.',
                'success' => ''
        ]);


    }

    public function logout(Request $request)
    {
        $user = User::find(Auth::id());
        $user->remember_token = null;
        $user->save();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        Auth::logout();
        return redirect('/login');
    }

    public function widget(){
        $user=User::first();

        $license=$user->licenses()->orderBy('created_at','DESC')->first();
        $settings=$license->settings;
        $settings=SettingResource::collection($settings);
        $settings=$settings->map(function($set){
            return json_decode($set->meta_value);
        });

        return Inertia::render("WidgetExample", ['settings' => $settings->toArray(request())]);
    }
}
