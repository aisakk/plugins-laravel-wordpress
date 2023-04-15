<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LicenseController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PluginController;

Route::post('/login', [AuthController::class, 'loginApi'])->name('login');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/license/store', [LicenseController::class, 'store'])->name('license.store');
    Route::post('/license/create', [LicenseController::class, 'create'])->name('license.create');
    Route::post('/plugins/update-info', [PluginController::class, 'updatePluginInfo'])->name('plugins.update-info');
});
