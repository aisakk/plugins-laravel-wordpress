<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;
    protected $fillable = [
        'action_name',
        'action_details',
        'action_data',
        'action_result',
        'license_id'
    ];

    public function license()
    {
        return $this->belongsTo(License::class);
    }
}
