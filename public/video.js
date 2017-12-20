'use strict';

var video = document.getElementById('video');
var constraints = { video: true };

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);

var canvas = document.getElementById('canvas'),
            savedData = new Image()
var context = canvas.getContext('2d')

document.getElementById("clickPhoto").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 320, 240)
    savedData.src = canvas.toDataURL("image/png")

    $.post('/postImage', {data: savedData.src}, function(result) {
        console.log(result)
    })
});
