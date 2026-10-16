<?php

namespace App\Repositories;

use App\Contracts\Repositories\ContactMessageRepositoryInterface;
use App\Models\ContactMessage;

class EloquentContactMessageRepository implements ContactMessageRepositoryInterface
{
    public function create(array $attributes): ContactMessage
    {
        return ContactMessage::query()->create($attributes);
    }
}
