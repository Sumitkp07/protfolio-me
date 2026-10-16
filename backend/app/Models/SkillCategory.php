<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SkillCategory extends Model
{
    protected $fillable = ['name', 'skills', 'sort_order'];

    protected function casts(): array
    {
        return ['skills' => 'array'];
    }
}
