<?php

namespace App\Services;

use App\Contracts\Repositories\ContactMessageRepositoryInterface;
use App\Models\ContactMessage;

class ContactService
{
    public function __construct(private readonly ContactMessageRepositoryInterface $messages)
    {
    }

    public function submit(array $payload, ?string $ipAddress): ContactMessage
    {
        return $this->messages->create([...$payload, 'ip_address' => $ipAddress]);
    }
}
