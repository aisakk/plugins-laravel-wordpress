<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LicenseNotificationEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $license;
    public $user;
    public $type;
    /**
     * Create a new event instance.
     */
    public function __construct($license, $user, $type)
    {
        //
        $this->license = $license;
        $this->user = $user;
        $this->type = $type; // 'new', 'expired', 'about_to_expire'
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
