<?php
/**
 * Display a contribution's actions
 *
 * @since 1.2.0
 *
 * @author SkyVerge
 * @package WC-Product-Reviews-Pro/Templates
 * @version 1.4.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>

<p class="contribution-actions">

	<a href="<?php echo esc_url( $contribution->get_vote_url( 'positive' ) ); ?>" class="vote vote-up js-tip <?php if ( 'positive' == $contribution->get_user_vote() ) : ?>done<?php endif; ?>" rel="nofollow" data-comment-id="<?php echo esc_attr( $contribution->get_id() ); ?>" title="<?php esc_attr_e( 'Upvote if this was helpful', 'woocommerce-product-reviews-pro' ); ?>"></a>
	<span class="vote-count vote-count-positive">
		(<span itemprop="upvoteCount"><?php echo absint( $contribution->get_positive_votes() ); ?></span>)
	</span>
	<a href="<?php echo esc_url( $contribution->get_vote_url( 'negative' ) ); ?>" class="vote vote-down js-tip <?php if ( 'negative' == $contribution->get_user_vote() ) : ?>done<?php endif; ?>" rel="nofollow" data-comment-id="<?php echo esc_attr( $contribution->get_id() ); ?>" title="<?php esc_attr_e( 'Downvote if this was not helpful', 'woocommerce-product-reviews-pro' ); ?>"></a>
	<span class="vote-count vote-count-negative">
		(<span itemprop="downvoteCount"><?php echo absint( $contribution->get_negative_votes() ); ?></span>)
	</span>

	<a href="#" class="notifications subscribe js-tip" rel="nofollow" title="<?php _e( 'Receive email notifications when there are replies', 'woocommerce-product-reviews-pro' ); ?>" data-comment-id="<?php echo esc_attr( $contribution->get_id() ); ?>" style="<?php if ( is_user_logged_in() && 'subscribe' !== $notifications ) { echo 'display: none;'; } ?>">
		<small><?php _ex( 'Watch', 'Subscribe to contribution thread', 'woocommerce-product-reviews-pro' ); ?></small>
	</a>
	<a href="#" class="notifications unsubscribe js-tip" rel="nofollow" title="<?php _e( 'Stop receiving email notifications when there are replies', 'woocommerce-product-reviews-pro' ); ?>" data-comment-id="<?php echo esc_attr( $contribution->get_id() ); ?>" style="<?php if ( 'unsubscribe' !== $notifications ) { echo 'display: none;'; } ?>">
		<small><?php _ex( 'Unwatch', 'Unsubscribe from contribution thread', 'woocommerce-product-reviews-pro' ); ?></small>
	</a>

	<span class="feedback"></span>

	<a href="#flag-contribution-<?php echo esc_url( $contribution->get_id() ); ?>" class="flag js-toggle-flag-form js-tip <?php if ( $contribution->has_user_flagged() ) : ?>done<?php endif; ?>" data-comment-id="<?php echo esc_attr( $contribution->get_id() ) ?>" title="<?php _e( 'Flag for removal', 'woocommerce-product-reviews-pro' ); ?>"></a>

</p>
