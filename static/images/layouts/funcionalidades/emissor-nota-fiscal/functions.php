<?php 
define("WP_TEMPLATE_DIRECTORY", get_bloginfo('template_directory'));

function theme_setup()
{
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'structured-post-formats', array( 'link', 'video' ) );
	add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'quote', 'status' ) );
	register_nav_menu( 'primary', __( 'Navigation Menu', 'vhsystheme' ) );
	add_theme_support( 'post-thumbnails' );

	add_image_size( 'feature-thumb', 750, 330, array('center','center') );
	add_image_size( 'post-thumb', 360, 200, array('center','center') );
	add_image_size( 'mini-thumb', 100, 100, array('center','center') );
}

function excerpt($limit)
{
	$excerpt = explode(' ', get_the_excerpt(), $limit);
	if (count($excerpt)>=$limit) {
		array_pop($excerpt);
		$excerpt = implode(" ",$excerpt).'...';
	} else {
		$excerpt = implode(" ",$excerpt);
	}
	$excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
	return $excerpt;
}

// Filter elimina imagens

function strip_images($content){
   return preg_replace('/<img[^>]+./','',$content);
}

// add new buttons
add_filter( 'mce_buttons', 'custom_register_buttons' );

function custom_register_buttons( $buttons ) {
   array_push( $buttons, 'blockpost' );
   return $buttons;
}
 
// Load the TinyMCE plugin : editor_plugin.js (wp2.5)
add_filter( 'mce_external_plugins', 'custom_register_tinymce_javascript' );

function custom_register_tinymce_javascript( $plugin_array ) {
   $plugin_array['custom'] = get_template_directory_uri() . '/assets/js/mce_custom.js';
   return $plugin_array;
}

if ( function_exists('register_sidebar') ){
	register_sidebar(array(
		'name'          => 'Barra Lateral Pre',
		'id'			=> 'widget-sidebar__up',
		'description' => __( 'Sidebar antes da lista', 'text_domain' ),
		'before_widget' => '',
		'after_widget' 	=> '',
		'before_title' 	=> '',
		'after_title' 	=> ''
	));

	register_sidebar( array(
		'id'          => 'VHSYS-list',
		'name'        => 'Lista Conheça VHSYS',
		'description' => __( 'Lista de itens conheça VHSYS, barra lateral', 'text_domain' ),
		'before_widget' => '',
		'after_widget' 	=> '',
		'before_title' 	=> '',
		'after_title' 	=> ''
	) );
	
	register_sidebar(array(
		'name'          => 'Barra Lateral Pos',
		'id'			=> 'widget-sidebar__down',
		'description' => __( 'Sidebar depois da lista', 'text_domain' ),
		'before_widget' => '',
		'after_widget' 	=> '',
		'before_title' 	=> '',
		'after_title' 	=> ''
	));
}

function add_global_custom_options()
{
    add_options_page('Emails Newsletter', 'Emails Newsletter', 'manage_options', 'newsletter', 'newsletter_options');
}

function newsletter_options()
{
	echo '<div class="wrap">';
	echo '<h2>Emails Newsletter</h2> <br />';

	$results = $GLOBALS['wpdb']->get_results( 'SELECT * FROM newsletter ORDER BY id_cadastro DESC', OBJECT );

	echo '<table class="wp-list-table widefat fixed striped">';
	echo '	<thead>';
	echo '		<tr>';
	echo '			<th>ID</th>';
	echo '			<th>Nome</th>';
	echo '			<th>Email</th>';
	echo '			<th>Telefone</th>';
	echo '			<th>Data de Cadastro</th>';
	echo '		</tr>';
	echo '	</thead>';
	echo '	<tbody>';
	foreach ($results as $item) {
		echo '		<tr>';
		echo '			<td>'.$item->id_cadastro.'</td>';
		echo '			<td>'.$item->nome_cadastro.'</td>';
		echo '			<td>'.$item->email_cadastro.'</td>';
		echo '			<td>'.$item->telefone_cadastro.'</td>';
		echo '			<td>'.date('d/m/Y H:i:s', strtotime($item->data_cadastro)).'</td>';
		echo '		</tr>';
	}
	echo '	</tbody>';
	echo '</table>';

	echo '</div>';
}

function comment_item( $comment, $args, $depth )
{
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
			include("comment-template.php");
		break;
		case 'pingback'  :
		case 'trackback' :
	?>
		<li class="post pingback">
			<p><?php _e( 'Pingback:', 'vhsys-blog-theme' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)', 'vhsys' ), ' ' ); ?></p>
	<?php
			break;
	endswitch;
}

function the_slug($echo=true){
	$slug = basename(get_permalink());
	do_action('before_slug', $slug);
	$slug = apply_filters('slug_filter', $slug);
	if( $echo ) echo $slug;
	do_action('after_slug', $slug);
	return $slug;
}

function get_link_aniversario($reference = false)
{
	$post_slug = explode("/", $_SERVER['REQUEST_URI']);
	$reference = (!$reference) ? "internoBlogFixo_aniversario" : $reference;

	$link = "https://vhsys.com.br/promocao-aniversario/";
	if($post_slug != "" AND !$_GET['_ga'])
	{
		$link .= "?intCamp=blog&intInfo=".$reference."_" . $post_slug[1];
	}
	else
	{
		$link .= "?intCamp=blog&intInfo=internoBlogFixo_Home";
	}
	return $link;
}
function get_link_experimente($reference = false)
{
	$post_slug = explode("/", $_SERVER['REQUEST_URI']);
	$reference = (!$reference) ? "internoBlogFixo" : $reference;

	$link = "https://vhsys.com.br/compra-segura/";
	if($post_slug != "" AND !$_GET['_ga'])
	{
		$link .= "?intCamp=blog&intInfo=".$reference."_" . $post_slug[1];
	}
	else
	{
		$link .= "?intCamp=blog&intInfo=internoBlogFixo_Home";
	}
	return $link;
}
function get_link_emitir_nfe($reference = false)
{
	$post_slug = explode("/", $_SERVER['REQUEST_URI']);
	$reference = (!$reference) ? "internoBlogFixo" : $reference;

	$link = "https://vhsys.com.br/emitir-nota-fiscal-eletronica/";
	if($post_slug != "" AND !$_GET['_ga'])
	{
		$link .= $reference;
	}
	else
	{
		$link .= "?intCamp=blog&intInfo=internoBlogFixo_Home";
	}
	return $link;
}
function get_link_blackfriday($reference = false)
{
	$post_slug = explode("/", $_SERVER['REQUEST_URI']);
	$reference = (!$reference) ? "internoBlogFixo" : $reference;

	$link = "https://vhsys.com.br/";
	if($post_slug != "" AND !$_GET['_ga'])
	{
		$link .= "?intCamp=blog&intInfo=".$reference."_" . $post_slug[1];
	}
	else
	{
		$link .= "?intCamp=blog&intInfo=internoBlogFixo_Home";
	}
	return $link;
}

function wpsites_before_post_widget( $content ) {
	if ( is_singular( array( 'post', 'page' ) ) && is_active_sidebar( 'before-post' ) && is_main_query() ) {
		dynamic_sidebar('before-post');
	}
	return $content;
}

register_sidebar( array(
	'id'          => 'before-post',
	'name'        => 'Widget Antes do Post',
	'description' => __( 'Área antes do conteudo', 'text_domain' ),
) );

function set_post_views($postID) {
    $count_key = 'views';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
//To keep the count accurate, lets get rid of prefetching
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

/**
 * Create admin Page to list unsubscribed emails.
 */
 // Hook for adding admin menus
 add_action('admin_menu', 'wpcust_cat_color');

 add_action('admin_menu', 'wpcust_cat_banner');
 
 // action function for above hook
 
/**
 * Adds a new top-level page to the administration menu.
 */
function wpcust_cat_color() {
     add_menu_page(
        __( 'Category Color Pickers', 'textdomain' ),
        __( 'Cat Color Pick','textdomain' ),
        'manage_options',
        'catColorAction',
        'catColorAction_do_page',
        'dashicons-admin-customizer',
		63
    );
} 

function wpcust_cat_banner() {
     add_menu_page(
        __( 'Category Banners', 'textdomain' ),
        __( 'Cat Banners','textdomain' ),
        'manage_options',
        'CatBannerAction',
        'CatBannerAction_do_page',
        'dashicons-admin-customizer',
		64
    );
}

/**
 * Aba de escolha de cor para cada categoria page.
 */
 function catColorAction_do_page() {
	$categories = get_categories($args);

	if (!get_option('catColorPick')) {
		$catArray = array();
	} else {
		$catArray = get_option('catColorPick');
	}
	include ('cat-color-picker.php');
 }

add_action( 'admin_action_catColorAction', 'catColorAction_admin_action' );

function catColorAction_admin_action() {

	$newCatColor = $_POST;

	delete_option( 'catColorPick' );

	update_option( 'catColorPick', $newCatColor );
	
    wp_redirect( $_SERVER['HTTP_REFERER'] );
    exit();
}

/**
 * Aba de escolha de do banner.
 */
 function CatBannerAction_do_page() {
	$categories = get_categories($args);

	if (!get_option('catBanner')) {
		$catArray = array();
	} else {
		$catArray = get_option('catBanner');
	}
	include ('cat-banner-picker.php');
 }

add_action( 'admin_action_CatBannerAction', 'CatBannerAction_admin_action' );

function CatBannerAction_admin_action() {

	$newBanner = $_POST;

	delete_option( 'catBanner' );

	update_option( 'catBanner', $newBanner );
	
    wp_redirect( $_SERVER['HTTP_REFERER'] );
    exit();
}

function wp_get_attachment( $attachment_id ) {

$attachment = get_post( $attachment_id );
return array(
'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
'caption' => $attachment->post_excerpt,
'description' => $attachment->post_content,
'href' => get_permalink( $attachment->ID ),
'src' => $attachment->guid,
'title' => $attachment->post_title
);
}

add_action( 'admin_menu', 'catColorAction_admin_menu' );

add_action( 'admin_menu', 'CatBannerAction_admin_menu' );


add_action( 'after_setup_theme', 'theme_setup' );
add_action( 'admin_menu', 'add_global_custom_options' );

add_action( 'pre_get_posts', function( $q )
{
    if( $title = $q->get( '_meta_or_title' ) )
    {
        add_filter( 'get_meta_sql', function( $sql ) use ( $title )
        {
            global $wpdb;

            // Only run once:
            static $nr = 0; 
            if( 0 != $nr++ ) return $sql;

            // Modified WHERE
            $sql['where'] = sprintf(
                " AND ( %s OR %s ) ",
                $wpdb->prepare( "{$wpdb->posts}.post_title like '%%%s%%'", $title),
                mb_substr( $sql['where'], 5, mb_strlen( $sql['where'] ) )
            );

            return $sql;
        });
    }
});


/* Função para duplicar POSTS */
/*
 * Function creates post duplicate as a draft and redirects then to the edit post screen
 */
function rd_duplicate_post_as_draft(){
	global $wpdb;
	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {
		wp_die('No post to duplicate has been supplied!');
	}
 
	/*
	 * Nonce verification
	 */
	if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
		return;
 
	/*
	 * get the original post id
	 */
	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );
	/*
	 * and all the original post data then
	 */
	$post = get_post( $post_id );
 
	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post->post_author;
	 */
	$current_user = wp_get_current_user();
	$new_post_author = $current_user->ID;
 
	/*
	 * if post data exists, create the post duplicate
	 */
	if (isset( $post ) && $post != null) {
 
		/*
		 * new post data array
		 */
		$args = array(
			'comment_status' => $post->comment_status,
			'ping_status'    => $post->ping_status,
			'post_author'    => $new_post_author,
			'post_content'   => $post->post_content,
			'post_excerpt'   => $post->post_excerpt,
			'post_name'      => $post->post_name,
			'post_parent'    => $post->post_parent,
			'post_password'  => $post->post_password,
			'post_status'    => 'draft',
			'post_title'     => $post->post_title,
			'post_type'      => $post->post_type,
			'to_ping'        => $post->to_ping,
			'menu_order'     => $post->menu_order
		);
 
		/*
		 * insert the post by wp_insert_post() function
		 */
		$new_post_id = wp_insert_post( $args );
 
		/*
		 * get all current post terms ad set them to the new post draft
		 */
		$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
		foreach ($taxonomies as $taxonomy) {
			$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
			wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
		}
 
		/*
		 * duplicate all post meta just in two SQL queries
		 */
		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
		if (count($post_meta_infos)!=0) {
			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
			foreach ($post_meta_infos as $meta_info) {
				$meta_key = $meta_info->meta_key;
				if( $meta_key == '_wp_old_slug' ) continue;
				$meta_value = addslashes($meta_info->meta_value);
				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
			}
			$sql_query.= implode(" UNION ALL ", $sql_query_sel);
			$wpdb->query($sql_query);
		}
 
 
		/*
		 * finally, redirect to the edit post screen for the new draft
		 */
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );
		exit;
	} else {
		wp_die('Post creation failed, could not find original post: ' . $post_id);
	}
}
add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );
 
/*
 * Add the duplicate link to action list for post_row_actions
 */
function rd_duplicate_post_link( $actions, $post ) {
	if (current_user_can('edit_posts')) {
		$actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicar este item" rel="permalink">Duplicar</a>';
	}
	return $actions;
}
 
add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );