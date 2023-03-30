<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EmailVerificationNotification extends Notification
{
    use Queueable;

    public $verificationCode;
    protected $email;

    public function __construct($email, $verificationCode)
    {
        $this->email = $email;
        $this->verificationCode = $verificationCode;
    }

    public function toMail($notifiable)
    {
            return (new MailMessage)
            ->line('Aquí está su código de verificación de correo electrónico:')
            ->line($this->verificationCode)
            ->action('Verificar', url('/email-verification'))
            ->line('Gracias por utilizar nuestra aplicación!')
            ->from('support@octonove.com', 'Octonove Support');
            // Mail::send($message);
            // echo 'El correo electrónico de verificación se ha enviado correctamente.';
      
    }

    public function via($notifiable)
    {
        return ['mail'];
    }
}
