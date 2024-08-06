let music = document.getElementById("music");
let icon = document.getElementById("icon");
icon.onclick = function(){
    if(music.paused){
        music.play();
        icon.src = 'pause-64.png'
    }
    else{
        music.pause();
        icon.src = "play-64.png";
    }
}