<?php

use App\Http\Controllers\BlogsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/blogs', [BlogsController::class, 'index']);
// Route::post('/blogs', [BlogsController::class, 'store']);


Route::resource('blogs', BlogsController::class);
Route::get('/blogs/search/{title}', [BlogsController::class, 'search']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
