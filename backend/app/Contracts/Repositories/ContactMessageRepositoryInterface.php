<?php

namespace App\Contracts\Repositories;

use App\Models\ContactMessage;

interface ContactMessageRepositoryInterface
{
    public function create(array $attributes): ContactMessage;
}
