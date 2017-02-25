<?php
defined( 'ABSPATH' ) or die( 'Cheatin\' uh?' );

define( 'WP_ROCKET_ADVANCED_CACHE', true );
$rocket_cache_path = '/home/vilandtr/public_html/wp-content/cache/wp-rocket/';
$rocket_config_path = '/home/vilandtr/public_html/wp-content/wp-rocket-config/';

if ( file_exists( '/home/vilandtr/public_html/wp-content/plugins/wp-rocket/inc/vendors/Mobile_Detect.php' ) ) {
	include( '/home/vilandtr/public_html/wp-content/plugins/wp-rocket/inc/vendors/Mobile_Detect.php' );
}
if ( file_exists( '/home/vilandtr/public_html/wp-content/plugins/wp-rocket/inc/front/process.php' ) ) {
	include( '/home/vilandtr/public_html/wp-content/plugins/wp-rocket/inc/front/process.php' );
} else {
	define( 'WP_ROCKET_ADVANCED_CACHE_PROBLEM', true );
}