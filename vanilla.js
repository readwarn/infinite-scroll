var myAudio=document.getElementById('myAudio');
var icon=document.querySelector('i.fa-play');
myAudio.loop=true;
icon.addEventListener('click',function(){
    if(myAudio.paused){
        myAudio.play();
    }
    else{
       myAudio.pause();
    }
})

