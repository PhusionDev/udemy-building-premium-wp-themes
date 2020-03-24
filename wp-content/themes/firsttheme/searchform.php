<form role="search" method="get" class="c-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <label for="" class="c-search-form__label">
    <span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', '_themename' ); ?></span>
  </label>
  <input type="search" class="c-search-form__field" name="s" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', '_themename' ); ?>" value="<?php echo esc_attr(get_search_query()) ?>"/>
  <button type="submit" class="c-search-form__button">
    <span class="u-screen-reader-text"><?php echo esc_html_x( 'Search', 'submit button', '_themename' ); ?></span>
    <i class="fas fa-search" aria-hidden="true"></i>
  </button>
</form>
