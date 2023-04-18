<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plugin extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'readme_path',
        'price',
        'image',
        'link',
        'is_new',
        'is_acquired',
        'rates',
        'reviews',
        'active',
    ];
}
