<?php

/*
 * This file is part of fof/secure-https.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\CustomFooter\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class LoadSettingsFromDatabase
{
    protected $packagePrefix = 'fof-custom-footer.';

    protected $fieldsToGet = [
        'text',
        'height',
        'js',
    ];

    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer)
    {
        foreach ($this->fieldsToGet as $field) {
            $key = $this->packagePrefix.$field;
            $attributes[$key] = $this->settings->get($key);
        }

        return $attributes;
    }
}
