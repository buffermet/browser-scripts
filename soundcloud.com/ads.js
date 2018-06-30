// Inbefore I replace declared but useless variables

let yungtravla_muted = false
const yungtravla_loop = setInterval(()=>{
	// Mute ads
	if ( !yungtravla_muted && document.querySelector(".playControlsPanel.is-visible") ) {
		document.querySelector(".volume__button").click()
		yungtravla_muted = true
	} else if ( yungtravla_muted && !document.querySelector(".playControlsPanel.is-visible") ) {
		document.querySelector(".volume__button").click()
		yungtravla_muted = false
	}
}, 666)
