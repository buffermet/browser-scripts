var yungtravla_muted = false
setInterval(function(){
  if ( 
    ( 
      document.querySelector("div#player.ytd-watch").innerHTML.match(/your video will begin in/i) 
      || document.querySelector("div#player.ytd-watch").innerHTML.match(/you can skip to video in/i) 
      || document.querySelector("div#player.ytd-watch").innerHTML.match(/video will play after ad/i) 
    ) 
    && !yungtravla_muted 
  ) {
    document.querySelector("button.ytp-mute-button.ytp-button").click()
    yungtravla_muted = true
  } else if (
    !( 
      document.querySelector("div#player.ytd-watch").innerHTML.match(/your video will begin in/i) 
      || document.querySelector("div#player.ytd-watch").innerHTML.match(/you can skip to video in/i) 
      || document.querySelector("div#player.ytd-watch").innerHTML.match(/video will play after ad/i) 
    ) 
    && yungtravla_muted 
  ) {
    document.querySelector("button.ytp-mute-button.ytp-button").click()
    yungtravla_muted = false
  }
}, 420)
