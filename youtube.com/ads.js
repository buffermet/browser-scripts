// Inbefore I replace declared but useless variables

let yungtravla_hide_annotations = true, // Optional
    yungtravla_muted = false

const yungtravla_loop = setInterval(()=>{
    if ( document.querySelector("div#player-container") ) {

        // Skip ads
        if ( document.querySelector("div#player-container").innerText.match(/skip\s(ad|to\send)/ig) ) {
            document.querySelectorAll("div#player-container div").forEach(div=>{
                div.innerText.match(/^Skip\s*Ad$/i) ? div.click() : ""
                div.innerText.match(/^Skip\s*to\s*End$/i) ? div.click() : ""
            })
        } else {
            // Mute ads
            if (
                document.querySelector("div#player-container").innerText.match(/video\s*will\s*begin/ig) 
                || document.querySelector("div#player-container").innerText.match(/you\s*can\s*skip\s*to\s*video/ig) 
                || document.querySelector("div#player-container").innerText.match(/video\s*will\s*play\s*after\s*ad/ig) 
            ) {
                if (!yungtravla_muted) {
                    document.querySelector("div#player-container button.ytp-mute-button.ytp-button").click()
                    yungtravla_muted = true
                }
            } else {
                if (yungtravla_muted) {
                    document.querySelector("div#player-container button.ytp-mute-button.ytp-button").click()
                    yungtravla_muted = false
                }
            }

            // Close/remove other ads
            document.querySelectorAll("div#player-container div.close-padding").forEach(close=>{
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
