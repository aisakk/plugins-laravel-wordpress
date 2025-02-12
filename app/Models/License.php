<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Log;

class License extends Model
{
    use HasFactory;

    protected $fillable = [
        'licence_key',
        'status',
        'user_id',
        'plugin_id',
        'expiration',
        'max_domains'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function domains()
    {
        return $this->hasMany(Domain::class);
    }
    public function settings()
    {
        return $this->hasMany(LicenseMeta::class);
    }
    public function domainsOrderedDesc()
    {
        return $this->domains()->orderBy('id', 'desc');
    }
    public function plugin()
    {
        return $this->belongsTo(Plugin::class);
    }
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
    public function logs()
    {
        return $this->hasMany(Log::class);
    }
}
