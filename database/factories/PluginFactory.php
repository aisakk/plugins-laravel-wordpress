<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plugin>
 */
class PluginFactory extends Factory
{
    protected static $imageCounter = 0;

    public function definition(): array
    {
        // $images=[
        //     'https://ps.w.org/ship-2-anywhere/assets/icon-256x256.png',
        //     'https://ps.w.org/ship-per-product/assets/icon-256x256.png',
        //     'https://ps.w.org/ship-safely/assets/icon-256x256.jpg',
        //     'https://ps.w.org/shipping-deprisa-woo/assets/icon-256x256.jpg',
        //     'https://ps.w.org/simple-calendar-for-elementor/assets/icon-256x256.png',
        //     'https://ps.w.org/simple-fb-feeds/assets/icon-256x256.jpg',
        // ];
        // $image = $images[self::$imageCounter % count($images)];

        // self::$imageCounter++;

        return [
            'name'=>fake()->catchPhrase(),
            'description'=>fake()->text(),
            'price'=>fake()->randomFloat(2, 12, 30),
            'is_new'=>fake()->randomElement([true,false]),
            'is_acquired'=>fake()->randomElement([true,false]),
            'images'=>"https://ps.w.org/ship-2-anywhere/assets/icon-256x256.png,https://ps.w.org/ship-per-product/assets/icon-256x256.png,https://ps.w.org/ship-safely/assets/icon-256x256.jpg,https://ps.w.org/shipping-deprisa-woo/assets/icon-256x256.jpg,https://ps.w.org/simple-calendar-for-elementor/assets/icon-256x256.png,https://ps.w.org/simple-fb-feeds/assets/icon-256x256.jpg,",
            'pricing'=>"{'pricing_json'}",
            'plugin_info'=>"{'plugin_info_json'}",
        ];
    }
}
