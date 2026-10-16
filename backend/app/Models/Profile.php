<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'title',
        'tagline',
        'summary',
        'email',
        'phone',
        'location',
        'github_url',
        'linkedin_url',
        'resume_url',
        'years_experience',
    ];
}
