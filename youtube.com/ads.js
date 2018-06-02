var yungtravla_muted = false
setInterval(function(){
	// Automatically skip ads
	
	// Mute ads
	if ( 
		( 
			document.querySelector("div#player.ytd-watch").innerText.match(/video will begin in/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/can skip to video in/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/video will play after ad/ig) 
		) 
		&& !yungtravla_muted 
	) {
		document.querySelector("button.ytp-mute-button.ytp-button").click()
		yungtravla_muted = true
	} else if ( 
		!( 
			document.querySelector("div#player.ytd-watch").innerText.match(/video will begin in/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/can skip to video in/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/video will play after ad/ig) 
		) 
		&& yungtravla_muted 
	) {
		document.querySelector("button.ytp-mute-button.ytp-button").click()
		yungtravla_muted = false
	}
	// Close pop-up ads
	if ( document.querySelectorAll("div.overlays-action-tray div.close-padding").length > 0 ) {
		document.querySelector("div.overlays-action-tray div.close-padding").click()
	}
	document.querySelectorAll("div.annotation").forEach(function(annotation){
		annotation.remove()
	})
}, 200)
