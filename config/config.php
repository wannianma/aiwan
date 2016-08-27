<?php

return [
    'settings' => [
        'displayErrorDetails' => true,

        'logger' => [
            'name' => 'slim-app',
            'level' => Monolog\Logger::DEBUG,
            'path' => __DIR__ . '/../logs/app.log',
        ],

        // Renderer settings
        'view' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        'db' => [
            'host' => 'localhost',
            'dbname' => 'test',
            'user' => 'root',
            'pass' => 'Manager'
        ],

        'wx' => [
            'appid' => '#',
            'appSecret' => '#'
        ],

        'qiniu' => [
            'access_key' => '#',
            'secret_key' => '#',
            'bucket' => 'shenyou',
            'bucket_url' => 'http://static.shenyou.tv/',
            'upload_pre' => 'test/',
            'pipline' => 'aiwan_mask',
            'notify_url' => '',
            'water_img_pre' => 'http://static.shenyou.tv/test/aiwan',
            'water_img_size' => [990, 1620],
        ]
    ],
];