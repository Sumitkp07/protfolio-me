<?php

use App\Http\Controllers\Api\V1\ContactController;
use App\Http\Controllers\Api\V1\PortfolioController;
use App\Http\Controllers\Api\V1\ProjectController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('portfolio', PortfolioController::class);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::get('projects/{project}', [ProjectController::class, 'show']);
    Route::post('contact', [ContactController::class, 'store'])->middleware('throttle:5,1');
});
