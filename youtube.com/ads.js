let yungtravla_hide_annotations = true,
    yungtravla_muted = false,
    yungtravla_loop = setInterval(function(){
    	if ( document.querySelector("div#player.ytd-watch") ) {
    
    		// Skip ads
    		if ( document.querySelector("div#player.ytd-watch").innerText.match(/Skip/g) ) {
    			document.querySelectorAll("div#player.ytd-watch div").forEach(function(div){
    				div.innerText == "Skip Ad" ? div.click() : ""
    				div.innerText == "Skip to End" ? div.click() : ""
    			})
    		}
    
    		// Mute ads
    		if (
    			document.querySelector("div#player.ytd-watch").innerText.match(/video will begin/ig) 
    			|| document.querySelector("div#player.ytd-watch").innerText.match(/you can skip to video/ig) 
    			|| document.querySelector("div#player.ytd-watch").innerText.match(/video will play after ad/ig) 
    		) {
    			if (!yungtravla_muted) {
    				document.querySelector("div#player.ytd-watch button.ytp-mute-button.ytp-button").click()
    				yungtravla_muted = true
    			}
    		} else {
    			if (yungtravla_muted) {
    				document.querySelector("div#player.ytd-watch button.ytp-mute-button.ytp-button").click()
    				yungtravla_muted = false
    			}
    		}
    
    		// Close/remove other ads
    		document.querySelectorAll("div#player.ytd-watch div.close-padding").forEach(function(close){
    			close.click()
    		})
    		document.querySelectorAll("div#player-ads").forEach(function(ad){
    			ad.remove()
    		})
    
    		// Hide annotations if required
    		if ( yungtravla_hide_annotations ) {
    			document.querySelectorAll("div.annotation").forEach(function(annotation){
    				annotation.remove()
    			})
    		}
    
    	}
    }, 666)
