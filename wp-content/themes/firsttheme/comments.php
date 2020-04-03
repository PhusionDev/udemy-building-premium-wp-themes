<?php
if ( post_password_required() ) {
  return;
}
?>

<div class="c-comments" id="comments">
  <?php if ( have_comments() ) { ?>
    <h2 class="c-comments__title">
      <?php
      /* Translators: 1 is number of comments, 2 is post title */
        printf(
          esc_html(
            _n(
              '%1$s Reply to "%2$s"',
              '%1$s Replies to "%2$s"',
              get_comments_number(),
              '_themename'
            )
          ),
          number_format_i18n( get_comments_number() ),
          get_the_title()
        );
      ?>
    </h2>

    <ul class="c-comments__list">
      <?php
        wp_list_comments( array(
          'avatar_size' => 200,
          'reply_text' => 'Reply!',
          'callback' => '_themename_comment_callback'
        ));
      ?>
    </ul>
    <?php the_comments_pagination(); ?>
     
  <?php } ?>

  <?php if ( !comments_open() && get_comments_number() ) { ?>
    <p class="c-comments__closed"><?php esc_html_e( 'Comments are closed for this post.', '_themename' ); ?></p>
  <?php } ?>

  <?php comment_form(); ?>
</div>
