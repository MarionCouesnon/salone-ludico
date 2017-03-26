// Pretty simple huh?
// yes, but does it really work?
$(document).ready(function () {
  var $scene = $('#scene').parallax();
  $scene.parallax('scalar', 0, 50);
  $scene.parallax('enable');
  $scene.parallax('updateLayers');

  // for the lulz
  console.log('💩 is ready!');
});
