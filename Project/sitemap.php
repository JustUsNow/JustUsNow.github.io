<?php

function getRootUrl() {
    $protocol = ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443)
        ? "https://"
        : "http://";
    $domain = $_SERVER['SERVER_NAME'];
    return $protocol . $domain . '/';
}

function getPages() {
    $jsonString = file_get_contents(__DIR__ . '/data/config.json');
    $config = json_decode($jsonString, true);
    return $config['pages'];
}

function getSitemapData($dateString) {

    $diffDate = date_diff(date_create(), date_create($dateString));
    $diff = $diffDate->days;

    if ($diff <= 1) {
        $changefreq = 'daily';
        $priority = 1;
    } else if ($diff <= 7) {
        $changefreq = 'weekly';
        $priority = 0.75;
    } else {
        $changefreq = 'monthly';
        $priority = 0.5;
    }
    return array(
        'lastmod' => $dateString,
        'changefreq' => $changefreq,
        'priority' => $priority
    );
}

header('Content-type: text/xml');

$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" />');
     
$pages = getPages();
$rootUrl = getRootUrl();
     
foreach($pages as $key => $page) {
    if (!empty($page['inSitemap'])) {
        $url = $xml->addChild('url');
        $data = getSitemapData($page['updated']);

        $url->addChild('loc', $rootUrl . $key);
        $url->addChild('lastmod', $data['lastmod']);
        $url->addChild('changefreq', $data['changefreq']);
        $url->addChild('priority', $data['priority']);
    }
}

$dom = new DomDocument();
$dom->loadXML($xml->asXML());
$dom->formatOutput = true;

echo $dom->saveXML();

?>