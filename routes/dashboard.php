<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	echo 'Success';
});

Route::resource('/', HomeController::class);
Route::resource('clientes', clienteController::class);
Route::resource('users', usersController::class);
Route::post('userUpdatePassword', [usersController::class], 'userUpdatePassword')->name('userUpdatePassword');
Route::resource('clientes', clienteController::class);
