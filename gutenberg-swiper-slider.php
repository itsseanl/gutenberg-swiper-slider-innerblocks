<?php

/**
 * Plugin Name:       Gutenberg Swiper Slider
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-swiper-slider
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenberg_swiper_slider_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_gutenberg_swiper_slider_block_init');


function gss_block_wrapper($block_content, $block)
{
	if ($block['blockName'] === 'create-block/gutenberg-swiper-slider') {
		$block_innerHTML = explode('</swiper-container>', $block['innerHTML']);
		error_log(print_r($block_innerHTML, true), 3, __DIR__ . '/innerhtml.txt');
		$block_content = $block_innerHTML[0];
		foreach ($block['innerBlocks'] as $innerblock) {
			$innerHTML = $innerblock['innerHTML'];
			//innerHTML of each child block
			$content = '<swiper-slide>' .  $innerHTML . '</swiper-slide>';
			$block_content .= $content;
		}
	}
	$block_content .= $block_innerHTML[1];
	return $block_content;
}

add_filter('render_block', 'gss_block_wrapper', 10, 2);
