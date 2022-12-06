<?php

namespace App\Repositories;

use App\Models\cliente;
use App\Repositories\BaseRepository;

/**
 * Class clienteRepository
 * @package App\Repositories
 * @version June 15, 2022, 3:12 pm UTC
*/

class clienteRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
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
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return cliente::class;
    }
}
