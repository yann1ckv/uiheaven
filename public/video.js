'use strict';

var front=false;
var video = document.getElementById('video');
var constraints = { video:  { facingMode: (front? "user" : "environment")} };

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
});

document.getElementById("meld").addEventListener("click", function() {

    savedData.src = canvas.toDataURL("image/png")
    let name = $('#uplo').val()
    let postcode = $('#postco').val()
    let email = $('#email').val()

    $.ajax({
        url:'https://yannickvisbeek.com/post/',
        cache: false,
        type: 'POST',
        data: {image: savedData.src, name: name, postcode: postcode, email: email},
        dataType: 'JSON',
        success(data, textStatus, jQxhr) {
            window.location.href = 'posted';
        },
        error: function(result) {
            console.log('Error: ' + result)
        }
    })
});
