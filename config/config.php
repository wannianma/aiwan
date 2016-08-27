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
            'appid' => 'wx9edd8d159f59f855',
            'appSecret' => 'wx9edd8d159f59f855'
        ],

        'qiniu' => [
            'access_key' => 'dQ6Trpb0F9zw0hve9j8X4Z0lL1MfbZ900fgtnKZ3',
            'secret_key' => '1cb4q4Q-ha62T34Vfzi64QG68haQcJt8BfX06TlG',
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