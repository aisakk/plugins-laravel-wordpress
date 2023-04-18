<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DomainsController;
use App\Http\Controllers\SettingsController;
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

/* Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout'); */
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

//Route::get('/email-verification', [EmailVerificationController::class, 'showEmailForm'])->name('email-verification.show');
Route::middleware(["guest"])->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/password-reset', [AuthController::class, 'resetPassword'])->name('resetPassword');
    Route::get('/password-reset/{code}', [AuthController::class, 'showResetPassword'])->name('showResetPassword');
    Route::post('/password-reset/update',  [AuthController::class, 'resetPasswordWithCode'])->name('resetPasswordWithCode');
    Route::get('/verify-email', [AuthController::class, 'verifyEmailThenRegister'])->name('verifyMessage');
    Route::get('/email-verification/{code}',  [AuthController::class, 'verify'])->name('verify-link');
});
Route::middleware(['auth', 'verified-custom', 'remember-custom', "web"])->group(function(){
    // Route::get('dashboard', [UserController::class, 'show'])->name('dashboard');
    Route::get('/plugins', [DashboardController::class, 'licenses'])->name('dashboard.licenses');
    Route::get('/plugins/{licenseId}/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    Route::get('/plugins/{licenseId}/domains', [DomainsController::class, 'index'])->name('dashboard.domains');
    Route::post('/domain/{licenseId}/store', [DomainsController::class, 'store'])->name('domains.store');
    Route::put('/domain/{domainId}/update', [DomainsController::class, 'update'])->name('domains.update');
    Route::delete('/domain/{domainId}/delete', [DomainsController::class, 'destroy'])->name('domains.destroy');

    Route::get('/plugins/{licenseId}/settings',[DashboardController::class,'settings'])->name('dashboard.settings');
    Route::post('/plugins/{licenseId}/save-settings', [SettingsController::class, 'store'])->name('domains.save-settings');

    Route::get('/plugins/{licenseId}/installation', [DashboardController::class, 'installation'])->name('dashboard.installation');
    Route::get('/plugins/{licenseId}/logs', [DashboardController::class, 'logs'])->name('dashboard.logs');

    Route::get('/plugins/{licenseId}/logs', [DashboardController::class, 'logs'])->name('dashboard.logs');

    Route::get('/all-plugins', [DashboardController::class, 'allPlugins'])->name('dashboard.all-plugins');
    Route::get('/plugin/{pluginId}/details', [DashboardController::class, 'pluginDetails'])->name('dashboard.plugin-details');
});

/* Route::get('/', function(){
    return view('notification.email-verify', ['url' =>'hola']);
}); */
/* Route::get('/register', [RegistrationController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegistrationController::class, 'register']); */


/* Route::post('/email-verification/send', [EmailVerificationController::class, 'sendVerificationEmail'])->name('email-verification.send');
Route::get('/email-verification/code', [EmailVerificationController::class, 'showVerificationForm'])->name('email-verification.code.show');
Route::post('/email-verification/verify', [EmailVerificationController::class, 'verify'])->name('email-verification.verify'); */

//Route::get('/password-reset', [PasswordResetController::class, 'showResetForm'])->name('password-reset.show');
//Route::post('/password-reset/send', [PasswordResetController::class, 'sendResetEmail'])->name('password-reset.send');
//Route::get('/password-reset/{token}', [PasswordResetController::class, 'showUpdateForm'])->name('password-reset.update.show');
//Route::post('/password-reset/update', [PasswordResetController::class, 'updatePassword'])->name('password-reset.update');

Route::get("widget", [AuthController::class, 'widget']);

// Route::post('/wp-json/octorestapi/v1/update_widget',[SettingsController::class,'jwtDecode']);

