<?php get_header();

	  //GETTING META VALUES...
	  $page_layout = dt_theme_option('specialty', 'post-archives-layout'); ?>
      
      <section class="fullwidth-background">
      	<div class="breadcrumb-wrapper">
			<div class="container">
				<h1><?php if(is_category()): _e('', 'iamd_text_domain'); echo single_cat_title();
                            elseif(is_day()):  _e('', 'iamd_text_domain'); echo get_the_date('l');
                            elseif(is_month()):  _e('', 'iamd_text_domain'); echo get_the_date('F, Y');
                            elseif(is_year()):  _e('', 'iamd_text_domain'); echo get_the_date('Y');
                            elseif(is_author()):  _e('', 'iamd_text_domain'); $author = get_user_by('login', get_query_var('author_name')); echo $author->nickname;
                            elseif(is_tag()):  _e('Tag Archives of : ', 'iamd_text_domain'); echo single_tag_title('', true);
                            elseif(taxonomy_exists('')):  _e('', 'iamd_text_domain'); echo single_cat_title();
                            endif; ?></h1>
				<?php new dt_theme_breadcrumb; ?>
			</div>
		</div>
	  </section>

      <div id="main">
          <div class="container">
              <div class="dt-sc-hr-invisible"></div>
              <div class="dt-sc-hr-invisible-small"></div>
              
              <?php if($page_layout == 'with-left-sidebar'): ?>
              	  <section class="secondary-sidebar secondary-has-left-sidebar" id="secondary-left"><?php get_sidebar('left'); ?></section>
              <?php elseif($page_layout == 'with-both-sidebar'): ?>
              	  <section class="secondary-sidebar secondary-has-both-sidebar" id="secondary-left"><?php get_sidebar('left'); ?></section>
              <?php endif; ?>
              
			  <?php if($page_layout != 'content-full-width'): ?>
		            <section id="primary" class="page-with-sidebar page-<?php echo esc_attr($page_layout); ?>">
			  <?php else: ?>
		            <section id="primary" class="content-full-width">
              <?php endif; ?>
				  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>><?php
                      //Performing archive layout...
                      get_template_part('includes/archive-post-layout'); ?>
                  </article>
              </section>
              
              <?php if($page_layout == 'with-right-sidebar'): ?>
              	  <section class="secondary-sidebar secondary-has-right-sidebar" id="secondary-right"><?php get_sidebar('right'); ?></section>
              <?php elseif($page_layout == 'with-both-sidebar'): ?>
              	  <section class="secondary-sidebar secondary-has-both-sidebar" id="secondary-right"><?php get_sidebar('right'); ?></section>
              <?php endif; ?>
          </div>
      </div>

<?php get_footer(); ?>