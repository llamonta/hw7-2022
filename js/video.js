// assigning the video to a variable named video
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
//creating a function called playVideo that plays the video
function playVideo(){
	video.play();

}
//selecting the play button, adding an event listener for click, and then calling playVideo
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	playVideo();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	
 });
// creating a function called pauseVideo that pauses the video
 function pauseVideo(){
	video.pause();
}
//selecting the pause button, adding an event listener for click, and then calling pauseVideo
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	pauseVideo();
 })

 function slowDown(){
	video.playbackRate = video.playbackRate / 1.1;
	console.log(video.playbackRate);
 }
document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slowing Down Video");
	slowDown();
})
function speedUp(){
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
 }
document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speeding Up Video");
	speedUp();
})
function skipAhead(){
	
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)

}
document.querySelector('#skip').addEventListener("click", function() {
	console.log('Skipping Ahead');
	skipAhead()
})
document.querySelector('#mute').addEventListener("click", function(){
	if (video.volume > 0){
		video.volume = 0;
		video.muted = true
		document.querySelector("#mute").innerHTML = 'Unmute';
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	}
	else{
		video.volume = 1;
		document.querySelector("#mute").innerHTML = 'Mute';
		video.muted = false
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	}

})
document.querySelector('#slider').addEventListener("click", function(){
	var requestedVolume = document.getElementById('slider').value;
	video.volume = requestedVolume / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
})

document.querySelector('#vintage').addEventListener("click", function(){
	console.log('vintage click registered');
	video.classList.add('oldSchool')
})
document.querySelector('#orig').addEventListener("click", function(){
	console.log('orig click registered');
	video.classList.remove('oldSchool')
})