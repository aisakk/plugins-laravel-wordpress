<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\License>
 */
class LicenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $statusCounter = 1;

    public function definition(): array
    {
        // Get the current status and update the counter.
        $status = $this->statusCounter % 2;
        $this->statusCounter++;
        return [

            'licence_key' => strtoupper(fake()->bothify('?????-????-????')),
            'status' => $status,
            'expiration'=>fake()->dateTimeBetween('1 week', '+5 week'),
            'domain'=>fake()->domainName(),
            'user_id'=>1,
        ];
    }
}
