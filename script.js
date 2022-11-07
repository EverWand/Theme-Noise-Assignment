/*Function for when the user clicks the settings button*/
function settings(){
    
    /*sets the BGSound ID to a variable*/
    let toggle = document.getElementById('BGSound');
    
/*IF/ELSE STATEMENT*/
    /*if there's no display for the BGSound container*/
    if (toggle.style.display == 'none') {
        /*display the BGSound container as a block display*/
        toggle.style.display = 'block';
        /*moves the pitcher to adjust to the updated display*/
        document.getElementById("moveImg").innerHTML=".pitcher{padding-top: 2.9%; transform: scaleX(-1);}"
    } 

    /*result if the requirement isn't met */
    else {
        /*gets rid of the BGSound Container display*/
        toggle.style.display = 'none';
        /*moves the pitcher to adjust to the updated display*/
        document.getElementById("moveImg").innerHTML=".pitcher{padding-top: 10%; transform: scaleX(-1);}"    
    }

}

/*Function that plays the Audio file for the pouring animation*/
function pourAudio() {
    /*New audio source that plays when the function is called*/
    new Audio('pouring_cut.mp3').play();
}