// Inbefore I replace declared but useless variables

let yungtravla_hide_annotations = true, // Optional
    yungtravla_muted = false

const yungtravla_loop = setInterval(()=>{
	if ( document.querySelector("div#movie_player") ) {

		// Skip ads
		if ( document.querySelector("div#movie_player").innerText.match(/skip\s(ad|to\send)/ig) ) {
			document.querySelectorAll("div#movie_player div").forEach(div=>{
				div.innerText.match(/^Skip\s*(Ad|to\s*End)$/i) ? div.click() : ""
			})
		} else {
			// Mute ads
			if (
				document.querySelector("div#movie_player").innerText.match(/video\s*will\s*begin/ig) 
				|| document.querySelector("div#movie_player").innerText.match(/you\s*can\s*skip\s*to\s*video/ig) 
				|| document.querySelector("div#movie_player").innerText.match(/video\s*will\s*play\s*after\s*ad/ig) 
			) {
				if (!yungtravla_muted) {
					document.querySelector("div#movie_player button.ytp-mute-button.ytp-button").click()
					yungtravla_muted = true
				}
			} else {
				if (yungtravla_muted) {
					document.querySelector("div#movie_player button.ytp-mute-button.ytp-button").click()
					yungtravla_muted = false
				}
			}

			// Close/remove other ads
			document.querySelectorAll("div#movie_player div.close-padding").forEach(close=>{
				close.click()
			})
			document.querySelectorAll("div#player-ads").forEach(ad=>{
				ad.remove()
			})

			// Hide annotations if required
			if (yungtravla_hide_annotations) {
				document.querySelectorAll(".annotation-shape").forEach(annotation=>{
					annotation.remove()
				})
			}
		}

	}
}, 666)
