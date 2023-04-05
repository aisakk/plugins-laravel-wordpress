<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class VerificateEmaill
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user() || $request->user()->hasVerifiedEmail()) {
            // Aquí, en lugar de redirigir al usuario, puedes devolver una vista personalizada.
            return $next($request);
        }
        return back()->withErrors(['error' => 'Usuario no esta verificado, se ha enviado un nuevo enlace a su email']);
    }
}
