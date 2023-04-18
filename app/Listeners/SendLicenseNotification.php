<?php

namespace App\Listeners;

use App\Events\LicenseNotificationEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Notifications;
use Carbon\Carbon;

class SendLicenseNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(LicenseNotificationEvent $event): void
    {
        //
        $existingNotification = Notifications::where('user_id', $event->user->id)
        ->where('type_action', $event->type)
        ->where('link', "/plugins/{$event->license->id}/dashboard")
        ->first();
        if ($existingNotification) {
            // La notificación ya existe, no es necesario guardarla de nuevo
            return;
        }
        $notification = new Notifications();
        $notification->user_id = $event->user->id;
        switch ($event->type) {
            case 'new':
                $notification->link = "/plugins/{$event->license->id}/dashboard";
                $notification->description_notify = "Nueva licencia registrada: {$event->license->licence_key}";
                $notification->type_action = "new";
                $notification->start_at = Carbon::now();
                break;
            case 'expired':
                $notification->link = "/plugins/{$event->license->id}/dashboard";
                $notification->description_notify = "Licencia caducada: {$event->license->licence_key}";
                $notification->type_action = "expired";
                $notification->start_at = Carbon::now();
                break;
            case 'renewed':
                    $notification->link = "/plugins/{$event->license->id}/dashboard";
                    $notification->description_notify = "Licencia renovada: {$event->license->licence_key}";
                    $notification->type_action = "renewed";
                    $notification->start_at = Carbon::now();
                    break;
            case 'about_to_expire':
                $notification->link = "/plugins/{$event->license->id}/dashboard";
                $notification->description_notify = "Licencia por caducar: {$event->license->licence_key}";
                $notification->type_action = "about_to_expire";
                $notification->start_at = Carbon::now();
                break;
        }

        $notification->save();
    }
}
