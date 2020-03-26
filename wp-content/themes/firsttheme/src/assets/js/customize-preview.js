import $ from 'jquery';

wp.customize('blogname', (value) => {
  value.bind( (to) => {
    $('.c-header__blogname').html(to);
  })
});

wp.customize('_themename_accent_color', (value) => {
  value.bind( (to) => {
    $('#_themename-stylesheet-inline-css').html(
      `
      a,
      .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover,
      .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {
        color: ${to};
      }
      :focus {
        outline-color: ${to};
      }
      .c-post.sticky {
        border-left-color: ${to};
      }
      button, input[type=submit], .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a {
        background-color: ${to};
      }
      .menu-button:focus {
        outline-color: ${to};
      }
      `
    );
  })
});

wp.customize('_themename_site_info', (value) => {
  value.bind( (to) => {
    $('.c-site-info__text').html(to);
  })
});