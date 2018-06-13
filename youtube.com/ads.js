var yungtravla_muted = false
yungtravla_loop = setInterval(function(){
	// Automatically skip ads
	if ( document.querySelector("div#player.ytd-watch").innerText.match(/Skip/g) ) {
		document.querySelectorAll("div#player.ytd-watch div").forEach(function(div){
			div.innerText == "Skip Ad" ? div.click() : ""
			div.innerText == "Skip to End" ? div.click() : ""
		})
	}
	// Mute ads
	if ( 
		( 
			document.querySelector("div#player.ytd-watch").innerText.match(/video will begin/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/you can skip to video/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/video will play after ad/ig) 
		) 
		&& !yungtravla_muted 
	) {
		document.querySelector("div#player.ytd-watch button.ytp-mute-button.ytp-button").click()
		yungtravla_muted = true
	} else if ( 
		!( 
			document.querySelector("div#player.ytd-watch").innerText.match(/video will begin/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/you can skip to video/ig) 
			|| document.querySelector("div#player.ytd-watch").innerText.match(/video will play after ad/ig) 
		) 
		&& yungtravla_muted 
	) {
		document.querySelector("div#player.ytd-watch button.ytp-mute-button.ytp-button").click()
		yungtravla_muted = false
	}
	// Close/remove other ads
	if ( document.querySelectorAll("div.overlays-action-tray div.close-padding").length > 0 ) {
		document.querySelector("div.overlays-action-tray div.close-padding").click()
	}
	document.querySelectorAll("div.annotation").forEach(function(annotation){
		annotation.remove()
	})
	document.querySelectorAll("div#player-ads").forEach(function(ad){
		ad.remove()
	})
}, 666)
setInterval(yungtravla_loop, 9999)
