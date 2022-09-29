<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Portfoliowidgets
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
	<div class="header__container">
		<a href="" class="header__logo"></a>
		<div class="header__menu menu">
			<div class="menu__icon">
				<span></span>
            </div>  
			<nav class="menu__body">
                <ul class="menu__list">
                    <li><a href=""  class="menu__link">Page 1</a></li>
                    <li><a href=""  class="menu__link">Page 2</a></li>
                    <li><a href=""  class="menu__link">Page 3</a></li>
                    <li>
					   <a href="" class="menu__link">Pages 1+</a>
					   <span class="menu__arrow"></span>
					   <span class="menu__arrowfalse"></span>
					   <ul class="menu__sub-list">
						<li>
						    <a href="" class="menu__sub-link">Page 1</a>
						</li>
						<li>
							<a href="" class="menu__sub-link">Page 2</a>
						 </li>
						 <li>
							<a href="" class="menu__sub-link">Page 3</a>
						 </li>
					   </ul>
					</li>
					<li><a href=""  class="menu__link">Page 4</a></li>
					<li>
						<a href="" class="menu__link">Pages 2+</a>
						<span class="menu__arrow"></span>
						<span class="menu__arrowfalse"></span>
						<ul class="menu__sub-list">
						 <li>
							 <a href="" class="menu__sub-link">Page 1</a>
						 </li>
						 <li>
							 <a href="" class="menu__sub-link">Page 2</a>
						  </li>
						  <li>
							 <a href="" class="menu__sub-link">Page 3</a>
						  </li>
						</ul>
					</li>
					<li><a href=""  class="menu__link">Page 5</a></li>
				</ul>
            </nav>        
		</div>
	</div>
</header>







<!--
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'portfoliowidgets' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$portfoliowidgets_description = get_bloginfo( 'description', 'display' );
			if ( $portfoliowidgets_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $portfoliowidgets_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
		</div>

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'portfoliowidgets' ); ?></button>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav>
	</header>
-->

