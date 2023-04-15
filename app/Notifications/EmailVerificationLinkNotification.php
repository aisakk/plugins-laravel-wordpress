<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EmailVerificationLinkNotification extends Notification
{
    use Queueable;
    public $verificationCode;
    /**
     * Create a new notification instance.
     */
    public function __construct($verificationCode)
    {
        //
        $this->verificationCode = $verificationCode;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $url = route('verify-link', ['code' => $this->verificationCode]);

      /*   return (new MailMessage)
        ->line('Haga clic en el enlace de abajo para verificar su correo electrónico:')
        ->action('Verificar correo electrónico', $url)
        ->line('Si no solicitó la verificación de correo electrónico, no se requiere ninguna acción adicional.'); */
        return (new MailMessage)
            ->subject('Verificación de correo electrónico Octonove') // Opcional: personalizar el asunto del correo electrónico
            ->view('notification.email-verify', ['url' => $url]);

    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
