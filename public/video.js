var video = document.getElementById('video');

var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); })
}

var canvas = document.getElementById('canvas'),
            savedData = new Image()
var context = canvas.getContext('2d')
var video = document.getElementById('video')

document.getElementById("clickPhoto").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 320, 240)
    savedData.src = canvas.toDataURL("image/png")

    $.post('/postImage', {data: savedData.src}, function(result) {
        console.log(result)
    })
});
