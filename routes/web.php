<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/verify-email', [AuthController::class, 'verifyEmailThenRegister'])->name('verifyMessage');

Route::get('/email-verification/{code}',  [AuthController::class, 'verify'])->name('verify-link');

//Route::get('/email-verification', [EmailVerificationController::class, 'showEmailForm'])->name('email-verification.show');

Route::middleware(['auth', 'verified-custom'])->group(function(){
    // Route::get('dashboard', [UserController::class, 'show'])->name('dashboard');
    Route::get('/licenses', [DashboardController::class, 'licenses'])->name('dashboard.licenses');
    Route::get('/{licenseId}/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::get('/{licenseId}/domains', [DashboardController::class, 'domains'])->name('dashboard.domains');
    Route::get('/{licenseId}/settings',[DashboardController::class,'settings'])->name('dashboard.settings');
    Route::get('/{licenseId}/details', [DashboardController::class, 'details'])->name('dashboard.details');
});


/* Route::get('/register', [RegistrationController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegistrationController::class, 'register']); */


/* Route::post('/email-verification/send', [EmailVerificationController::class, 'sendVerificationEmail'])->name('email-verification.send');
Route::get('/email-verification/code', [EmailVerificationController::class, 'showVerificationForm'])->name('email-verification.code.show');
Route::post('/email-verification/verify', [EmailVerificationController::class, 'verify'])->name('email-verification.verify'); */

Route::get('/password-reset', [PasswordResetController::class, 'showResetForm'])->name('password-reset.show');
Route::post('/password-reset/send', [PasswordResetController::class, 'sendResetEmail'])->name('password-reset.send');
Route::get('/password-reset/{token}', [PasswordResetController::class, 'showUpdateForm'])->name('password-reset.update.show');
Route::post('/password-reset/update', [PasswordResetController::class, 'updatePassword'])->name('password-reset.update');

