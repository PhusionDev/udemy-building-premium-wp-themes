<?php

require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

function after_pagination() {
  echo 'some text here';
}

function after_pagination2() {
  echo 'some more text here';
}

add_action( '_themename_after_pagination', 'after_pagination', 2 );
add_action( '_themename_after_pagination', 'after_pagination2',1 );