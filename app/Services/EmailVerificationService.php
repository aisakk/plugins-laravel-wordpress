<?php
namespace App\Services;

use App\Models\User;
use App\Notifications\EmailVerificationNotification;
use Illuminate\Support\Facades\Hash;

class EmailVerificationService
{
    public static function sendVerificationCode(User $user)
    {
        $verificationCode = random_int(100000, 999999);
        $user->verification_code = Hash::make($verificationCode);
        $user->save();

        $user->notify(new EmailVerificationNotification($user->email, $verificationCode));
    }
}
