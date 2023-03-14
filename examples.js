/* Examples */
(function($) {
  /*
   * Example 1:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */

  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */

  var loaded = 0;
  var c4 = $('.second.circle');
  // the function is executed noly on scroll onlh once
  $(window).scroll(function() {
    if (loaded == 0  && $(window).scrollTop() > 400) {
      loaded = 1;
  $('.second.circle').circleProgress({
    value: 0.354
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(6160 * progress) + '<i>$ <br> raised </i>');
  })}});


 window.addEventListener('load', () => {
   AOS.init({
     duration: 1000,
     easing: 'ease-in-out',
     once: true,
     mirror: false
   })
 });





  // Let's emulate dynamic value update
  // setTimeout(function() { c4.circleProgress('value', 0.01); }, 1000);
  // setTimeout(function() { c4.circleProgress('value', 0.05); }, 1400);
  // setTimeout(function() { c4.circleProgress('value', 0.13); }, 1800);

  /*
   * Example 5:
   *
   * - image fill; image should be squared; it will be stretched to SxS size, where S - size of the widget
   * - fallback color fill (when image is not loaded)
   * - custom widget size (default is 100px)
   * - custom circle thickness (default is 1/14 of the size)
   * - reverse drawing mode
   * - custom animation start value
   * - usage of "data-" attributes
   */

})(jQuery);
