<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class cliente
 * @package App\Models
 * @version June 15, 2022, 3:12 pm UTC
 *
 * @property string $contrato
 * @property string $nombre
 * @property string $cedula
 * @property string $telefono
 * @property string $cuota
 * @property string $fecha_afiliacion
 * @property string $municipio
 * @property string $direccion
 */
class cliente extends Model
{

	use HasFactory;

	public $table = 'clientes';


	// protected $dates = ['deleted_at'];



	public $fillable = [
		'contrato',
		'nombre',
		'cedula',
		'telefono',
		'cuota',
		'fecha_afiliacion',
		'municipio',
		'direccion'
	];

	/**
	 * The attributes that should be casted to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'id' => 'integer',
		'contrato' => 'string',
		'nombre' => 'string',
		'cedula' => 'string',
		'telefono' => 'string',
		'cuota' => 'string',
		'fecha_afiliacion' => 'string',
		'municipio' => 'string',
		'direccion' => 'string'
	];

	/**
	 * Validation rules
	 *
	 * @var array
	 */
	public static $rules = [
		'contrato' => 'required',
		'nombre' => 'required',
		'cedula' => 'required',
		'telefono' => 'required',
		'cuota' => 'required',
		'fecha_afiliacion' => 'required',
		'municipio' => 'required',
		'direccion' => 'required'
	];
}
