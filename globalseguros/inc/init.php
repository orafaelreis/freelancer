<?php

$url = new stdClass();
$url->base = 'http://'.$_SERVER['HTTP_HOST'];
$url->current = $url->base.$_SERVER['REQUEST_URI'];

$menu = array('empresa', 'seguradoras', 'contato' );
$activeMenuIndex = 0;

for($i = 1; $i < count($menu); ++$i) {
    if(stripos($url->current,$menu[$i]) !== false){
      $activeMenuIndex =  $i ;
    }
}
