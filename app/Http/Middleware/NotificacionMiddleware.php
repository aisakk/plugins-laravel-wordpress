<?php

namespace App\Http\Middleware;

use App\Models\Notifications;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class NotificacionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $token = Auth::user()->createToken('my-app-token')->plainTextToken;
        $now = Carbon::now();
        $notificaciones_pendientes = Notifications::where('user_id', $user->id)
            ->where('start_at', '<=', $now)
            ->get();

        if (!$notificaciones_pendientes->isEmpty()) {
            Inertia::share('notifications', $notificaciones_pendientes);
        } else {
            Inertia::share('notifications', []);
        }
        Inertia::share('api_token', $token);
        return $next($request);
    }
}
