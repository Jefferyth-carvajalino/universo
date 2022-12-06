<?php

namespace Database\Factories;

use App\Models\cliente;
use Illuminate\Database\Eloquent\Factories\Factory;

class clienteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = cliente::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'contrato' => $this->faker->word,
        'nombre' => $this->faker->word,
        'cedula' => $this->faker->word,
        'telefono' => $this->faker->word,
        'cuota' => $this->faker->word,
        'fecha_afiliacion' => $this->faker->word,
        'municipio' => $this->faker->word,
        'direccion' => $this->faker->word,
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
