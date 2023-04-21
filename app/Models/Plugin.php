<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plugin extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'readme',
        'description',
        'price',
        'is_new',
        'is_acquired',
        'images',
        'pricing',
        'plugin_info',
    ];
}
