var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	document.querySelector("#volume").innerHTML = video.volume*100+'%'

});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});




document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate *.95;
	console.log ("New Speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate *1.05;
	console.log ("New Speed is: " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	if ((video.duration - video.currentTime)  >= 15) {
		video.currentTime = video.currentTime + 15;
		console.log ('Current location: ' + video.currentTime);
	}
	
	else {
		video.currentTime = 0;
		console.log ('Current location: ' + video.currentTime);
	}

});





document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#volume").innerHTML = 0+'%'
		console.log("Mute Video");
	}
	else {
		video.muted = false; 
		document.querySelector("#volume").innerHTML = video.volume*100+'%'
		console.log("Unmute Video");
	}

});



document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100+'%'
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Activate Old School');
	
	video.classList.add('oldSchool');
});


document.querySelector("#orig").addEventListener("click", function() {
	console.log('Activate Original');

	video.classList.remove('oldSchool');

});












