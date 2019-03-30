
// Choose at which point a song restarts on Soundcloud

var lilprism_loop;

document.querySelector(".playbackTimeline__timePassed").addEventListener("click", async(event)=>{
	clearInterval(lilprism_loop);
	const time_string = prompt("Loop at: ");
	location.hash = time_string;
	lilprism_loop = setInterval(async()=>{
		const loop_time = parseInt( time_string.replace(/[^0-9]/g, "") );
		const current_time_string = document.querySelector(".playbackTimeline__timePassed > span:nth-child(2)").innerText;
		const current_time = parseInt( current_time_string.replace(/[^0-9]/g, "") );
		if (current_time >= loop_time) {
			document.querySelector("button.skipControl:nth-child(1)").click();
		}
	}, 1000);
});
