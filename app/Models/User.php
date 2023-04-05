<?php

namespace App\Models;


use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class User extends Authenticatable implements MustVerifyEmail
{
      use HasFactory, Notifiable;

      protected $fillable = [
            'email',
            'username',
            'password',
            'email_last_verification',
            'remember_token',
            'verification_code'
      ];

      public function hasVerifiedEmail()
      {
          return !is_null($this->email_last_verification);
      }
}
