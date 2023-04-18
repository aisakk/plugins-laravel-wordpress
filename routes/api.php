<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LicenseController;
use App\Http\Controllers\PluginController;


Route::middleware(['auth:sanctum'])->group(function(){
    Route::delete('/notifications/deleteAll', [LicenseController::class, 'deleteAll'])->name('deleteAllNotification');
    Route::delete('/notifications/{id}', [LicenseController::class, 'delete'])->name('deleteNotification');
    Route::post('/license/notification', [LicenseController::class, 'notification'])->name('notifications');

});
Route::post('/license/store', [LicenseController::class, 'store'])->name('license.store');
Route::post('/license/create', [LicenseController::class, 'create'])->name('license.create');
Route::post('/plugins/update-info', [PluginController::class, 'updatePluginInfo'])->name('plugins.update-info');
