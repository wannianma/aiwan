<?php
// DIC configuration
require __DIR__ . '/plugins/jssdk.php';

$container = $app->getContainer();

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// PDO
$container['db'] = function ($c) {
    $db = $c->get('settings')['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
        $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

// Register component on container
$container['view'] = function ($c) {
    $view = new \Slim\Views\Twig($c->get('settings')['view']['template_path']);
    return $view;
};

// jssdk
$container['wx'] = function ($c) {
    $wx = $c->get('settings')['wx'];
    $jssdk = new \JSSDK($wx['appid'], $wx['appSecret']);
    return $jssdk;
};

//Override the default Not Found Handler
$container['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        return $c['response']
            ->withStatus(404)
            ->withHeader('Content-Type', 'text/html')
            ->write('<h1>Page not found</h1>');
    };
};

// Water Image
$container['Image'] = function ($c) {
    $image = new Intervention\Image\ImageManager(array('driver' => 'gd'));
    return $image;
};
