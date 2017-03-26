var deviceOrientationData ={alpha:0,beta:0,gamma:0};//init with 0 as defaults

window.addEventListener('deviceorientation', function(eventData) {
  // The compass direction - will return a value between 0 and 360
  deviceOrientationData.alpha = eventData.alpha;

  // Side to side value - will return a value between -180 and 180
  deviceOrientationData.beta = eventData.beta;

  // Front to back value - will return a value between -90 and 90
  deviceOrientationData.gamma= eventData.gamma;

  document.getElementById('alpha').innerHTML=deviceOrientationData.alpha;
	document.getElementById('beta').innerHTML=deviceOrientationData.beta;
	document.getElementById('gamma').innerHTML =deviceOrientationData.gamma;
});
