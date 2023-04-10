<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\License;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Domain>
 */
class DomainFactory extends Factory
{

    protected $statusCounter = 1;
    public function definition(): array
    {
        $status = $this->statusCounter % 2;
        $this->statusCounter++;
        return [
            'license_id' => License::factory(),
            'name' => fake()->domainName(),
            'active' => $status,
        ];
    }
}
