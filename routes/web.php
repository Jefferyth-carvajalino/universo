<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	// return view('home');
});


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('/login', App\Http\Controllers\LoginController::class);
Route::resource('/login-adviser', App\Http\Controllers\LoginAdviserController::class);
Route::resource('/horoscopo', App\Http\Controllers\HoroscopoController::class);
Route::resource('/especialidades', App\Http\Controllers\EspecialidadesController::class);
Route::resource('/especialidades-interno', App\Http\Controllers\EspecialidadesInternoController::class);
Route::resource('/noticias', App\Http\Controllers\NoticiasController::class);
Route::resource('/noticias-interno', App\Http\Controllers\NoticiasInternoController::class);
Route::resource('/conocenos', App\Http\Controllers\ConocenosController::class);
