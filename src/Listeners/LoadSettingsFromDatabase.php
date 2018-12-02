<?php

/*
 * This file is part of fof/secure-https.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\CustomFooter\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

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

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            foreach ($this->fieldsToGet as $field) {
                $key = $this->packagePrefix.$field;
                $event->attributes[$key] = $this->settings->get($key);
            }
        }
    }
}
