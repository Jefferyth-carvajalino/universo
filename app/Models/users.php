<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class users
 * @package App\Models
 * @version June 13, 2022, 10:04 pm UTC
 *
 * @property string $name
 * @property string $email
 * @property string $email_verified_at
 * @property string $password
 * @property string $remember_token
 */
class users extends Model
{
	// use SoftDeletes;

	use HasFactory;

	public $table = 'users';


	// protected $dates = ['deleted_at'];



	public $fillable = [
		'name',
		'email',
		'email_verified_at',
		'password',
		'remember_token'
	];

	/**
	 * The attributes that should be casted to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'id' => 'integer',
		'name' => 'string',
		'email' => 'string',
		'email_verified_at' => 'string',
		'password' => 'string',
		'remember_token' => 'string'
	];

	/**
	 * Validation rules
	 *
	 * @var array
	 */
	public static $rules = [
		'name' => 'required',
		'email' => 'required',
		'email_verified_at' => 'required',
		'password' => 'required',
		'remember_token' => 'required'
	];
}
