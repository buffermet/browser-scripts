var yungtravla_muted = false
setInterval(function(){
  if ( ( document.body.innerHTML.match(/your video will begin/ig) || document.body.innerHTML.match(/you can skip/ig) ) && !yungtravla_muted ) {
    document.querySelector("button.ytp-mute-button.ytp-button").click()
    yungtravla_muted = true
  } else if ( !( document.body.innerHTML.match(/your video will begin/ig) || document.body.innerHTML.match(/you can skip/ig) ) && yungtravla_muted ) {
    document.querySelector("button.ytp-mute-button.ytp-button").click()
    yungtravla_muted = false
  }
}, 420)
