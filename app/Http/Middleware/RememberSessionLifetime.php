<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RememberSessionLifetime
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if($request->user()->remember_token !== null){
            config(['session.lifetime' => env('SESSION_LIFETIME_REMEMBER', 43200)]);
        }else{
            config(['session.lifetime' => env('SESSION_LIFETIME', 0)]);
        }
        return $next($request);
    }
}
