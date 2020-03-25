import $ from 'jquery';

wp.customize('blogname', (value) => {
  value.bind( (to) => {
    $('.c-header__blogname').html(to);
  })
});

wp.customize('_themename_site_info', (value) => {
  value.bind( (to) => {
    $('.c-site-info__text').html(to);
  })
});