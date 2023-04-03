<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/register', [RegistrationController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegistrationController::class, 'register']);

Route::get('/email-verification', [EmailVerificationController::class, 'showEmailForm'])->name('email-verification.email.show');
Route::post('/email-verification/send', [EmailVerificationController::class, 'sendVerificationEmail'])->name('email-verification.send');
Route::get('/email-verification/code', [EmailVerificationController::class, 'showVerificationForm'])->name('email-verification.code.show');
Route::post('/email-verification/verify', [EmailVerificationController::class, 'verify'])->name('email-verification.verify');

Route::get('/password-reset', [PasswordResetController::class, 'showResetForm'])->name('password-reset.show');
Route::post('/password-reset/send', [PasswordResetController::class, 'sendResetEmail'])->name('password-reset.send');
Route::get('/password-reset/{token}', [PasswordResetController::class, 'showUpdateForm'])->name('password-reset.update.show');
Route::post('/password-reset/update', [PasswordResetController::class, 'updatePassword'])->name('password-reset.update');

Route::get('dashboard', [UserController::class, 'show'])->name('dashboard');
