<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'category',
        'summary',
        'highlights',
        'technologies',
        'live_url',
        'period',
        'is_featured',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'highlights' => 'array',
            'technologies' => 'array',
            'is_featured' => 'boolean',
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
