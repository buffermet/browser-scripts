
/* 
*	
*	Choose at which point a song restarts on Soundcloud
*	
*	HINT: click the bottom left timer
*	
*/

let lilprism_loop;

const setLimit = () => {
	clearInterval(lilprism_loop);
	const time_string = prompt("Loop at: ");
	lilprism_loop = setInterval(()=>{
		const loop_time = parseInt( time_string.replace(/[^0-9]/g, "") );
		const current_time_string = document.querySelector(".playbackTimeline__timePassed > span:nth-child(2)").innerText;
		const current_time = parseInt( current_time_string.replace(/[^0-9]/g, "") );
		if (current_time >= loop_time) {
			document.querySelector("button.skipControl:nth-child(1)").click();
		}
	}, 1000);
}

try {
	document.querySelector(".playbackTimeline__timePassed").addEventListener("click", setLimit);
} catch(ignore) {
	self.addEventListener("load", ()=>{
		document.querySelector(".playbackTimeline__timePassed").addEventListener("click", setLimit);
	});
}
