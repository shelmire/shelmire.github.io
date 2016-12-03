/*!
 * fullPage 2.8.2 - Menu
 * https://github.com/alvarotrigo/fullPage.js
 */

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['one', 'two', 'three', 'four'],
    menu: '#menu',
    continuousVertical: false,
    responsiveHeight: 600,
    slidesNavigation: true,
    scrollOverflow: true,
    scrollOverflowOptions: {
      scrollbars: true,
      mouseWheel: true,
      hideScrollbars: false,
      fadeScrollbars: false,
      disableMouse: true
    }
  });
});
