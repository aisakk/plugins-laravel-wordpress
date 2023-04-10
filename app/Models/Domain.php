<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    use HasFactory;
    protected $fillable = [
        'license_id',
        'name',
        'active',
    ];

    public function license()
    {
        return $this->belongsTo(License::class);
    }
}
