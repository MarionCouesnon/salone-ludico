"use strict";var deviceOrientationData={alpha:0,beta:0,gamma:0};window.addEventListener("deviceorientation",function(a){deviceOrientationData.alpha=a.alpha,deviceOrientationData.beta=a.beta,deviceOrientationData.gamma=a.gamma,document.getElementById("alpha").innerHTML=deviceOrientationData.alpha,document.getElementById("beta").innerHTML=deviceOrientationData.beta,document.getElementById("gamma").innerHTML=deviceOrientationData.gamma});