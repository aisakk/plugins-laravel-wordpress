<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;

    protected $fillable = [
        'licence_key',
        'status',
        'user_id',
        'plugin_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function domains()
    {
        return $this->hasMany(Domain::class);
    }

    public function domainsOrderedDesc()
    {
        return $this->domains()->orderBy('id', 'desc');
    }
    public function plugin()
    {
        return $this->belongsTo(Plugin::class);
    }
}
