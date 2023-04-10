<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LicenseMeta extends Model
{
    use HasFactory;

    protected $table = 'license_meta';

    protected $fillable = [
        'meta_key',
        'meta_value',
        'license_id',
    ];

    public function license()
    {
        return $this->belongsTo(License::class);
    }
}
