<?php

use App\Http\Controllers\AuthController;
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
//Route::resource('blogs', BlogsController::class);



//public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/blogs', [BlogsController::class, 'index']);
Route::get('/blogs/search/{title}', [BlogsController::class, 'search']);



//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/blogs', [BlogsController::class, 'store']);
    Route::delete('/blogs/{id}', [BlogsController::class, 'destroy']);
    Route::put('/blogs/{id}', [BlogsController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logout']);
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
