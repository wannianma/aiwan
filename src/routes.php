<?php

use Qiniu\Processing\ImageUrlBuilder;
use Qiniu\Auth;
use Qiniu\Processing\PersistentFop;
use Qiniu\Storage\UploadManager;
// Routes

$app->get('/stpro', function ($request, $response, $args) {
    $this->logger->info("Aiwan '/stpro/' route");
    return $this->view->render($response, 'index.html', []);
});

$app->get('/wx/jsconfig', function ($request, $response, $args) {
    $this->logger->info("aiwan '/wx/jsconfig' route");
    $url = $request->getQueryParams('url', '');

    $signPackage = $this->wx->getSignPackage($url);
    return $response->withJson($signPackage);
});

$app->post('/stpro/mask', function ($request, $response, $args) {
    $img_base64 = $request->getParam('image');
    $img = explode(',', $img_base64);
    if (count($img) < 2) {
        return $response->write("data is not allowed");
    }
    $img_data = base64_decode($img[1]);
    $color = $request->getParam('color', 'red');
    $word1 = $request->getParam('description1', '');
    $word2 = $request->getParam('description2', '');
    # 将图片上传到七牛
    $qiniu = $this->get('settings')['qiniu'];
    $accessKey = $qiniu['access_key'];
    $secretKey = $qiniu['secret_key'];
    $auth = new Auth($accessKey, $secretKey);
    $bucket = $qiniu['bucket'];
    $token = $auth->uploadToken($bucket);
    // 上传后key值
    $key = $qiniu['upload_pre'] . date('ymdhi',time()).mt_rand(100, 1000).'.jpg';
    $uploadMgr = new UploadManager();
    list($ret, $err) = $uploadMgr->put($token, $key, $img_data);
    if ($err != null) {
        var_dump($err);
    }
    // 对图片进行水印处理
    $mask_img = \Tools::getMaskOfImg($qiniu, $key, 'green', $word1, $word2, 'hello, word');
    $img_url = $qiniu['bucket_url'].$mask_img;
    $this->logger->info($img_url);
    return $response->withStatus(302)->withHeader('Location', '/stpro/poster?url='.base64_encode($img_url));
});

$app->get('/stpro/poster', function($request, $response, $args) {
    $img_url = $request->getParam('url');
    return $this->view->render($response, 'poster.html', [
        'url' => base64_decode($img_url) ,
    ]);
});

$app->get('/stpro/pcmask', function ($request, $response, $args) {

});


$app->get('/test', function($request, $response, $args) {

});

class Tools {
    //根据输入内容获取模板图片链接
    public static function getMaskOfImg($qiniu_config, $img_key, $color, $word1='', $word2='', $word3='') {
        $imageUrlBuilder = new ImageUrlBuilder();
        # 根据颜色选取模板图片
        $water_img_pre = $qiniu_config['water_img_pre'];
        $water_img = $water_img_pre . '_' .$color. '.png';
        # 根据mask图片大小对原图进行裁剪
        $water_img_size = $qiniu_config['water_img_size'];
        $thumblink = \Qiniu\thumbnail($water_img, 1, $water_img_size[0], $water_img_size[1]);
        # 添加mask水印
        $waterLink = $imageUrlBuilder->waterImg($thumblink, $water_img, 100, 'SouthEast', 0, 0);
        # 添加文字水印
        $font = '微软雅黑';
        $font_size = 600;
        $textLink = $imageUrlBuilder->waterText($waterLink, $word1, $font, $font_size, $color, 100, 'SouthWest', 45, 210);
        $textLink = $imageUrlBuilder->waterText($textLink, $word2, $font, $font_size, $color, 100, 'SouthWest', 45, 180);
        $textLink = $imageUrlBuilder->waterText($textLink, $word3, $font, $font_size, $color, 100, 'SouthWest', 45, 150);

        # 获取串行处理命令
        $fops = substr($textLink, stripos($textLink, '?')+1);
        # 添加另存为命令
        $bucket = $qiniu_config['bucket'];
        $new_key = substr($img_key, 0, stripos($img_key, '.')) . '_mask.' . substr($img_key, stripos($img_key, '.')+1);
        $entry = \Qiniu\base64_urlSafeEncode("$bucket:$new_key");
        $fops = $fops."|saveas/$entry";

        $accessKey = $qiniu_config['access_key'];
        $secretKey = $qiniu_config['secret_key'];
        $auth = new Auth($accessKey, $secretKey);
        $pipeline = $qiniu_config['pipline'];
        $notifyUrl = $qiniu_config['notify_url'];
        $pfop = new PersistentFop($auth, $bucket, $pipeline, $notifyUrl);
        list($id, $err) = $pfop->execute($img_key, $fops);
        if ($err != null) {
            return '';
        } else {
            return $new_key;
        }
    }

}