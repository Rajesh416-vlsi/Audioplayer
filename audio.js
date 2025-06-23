let image=document.getElementById("img")
let prebutton=document.getElementById("prev")
let netbutton=document.getElementById("next")
let vup=document.getElementById("Vup")
let vdown=document.getElementById("Vdown")
let Rst=document.getElementById("rst")
let Pause=document.getElementById("pause")
let play=document.getElementById("play")
let audioplayer=new Audio("/netflix/audios/song1.mp3");

let images=["B1","B2","B3","B4","B5","B6","B7","B8","B9","B10"]
let audio=["song1","song2","song3","song4","song5","song6","song7","song8","song9","song11"]
let i=0;
console.log(images.length);
console.log(audio)

netbutton.addEventListener('click',()=>
{
    if(i<images.length-1){
      i++;
    console.log("if from next"+i)}
    else{
        i=0;
        console.log("else from next"+i)
        }
    image.src="/netflix/images/"+images[i]+".jpg";
    audioplayer.src="/netflix/audios/"+audio[i]+".mp3";
    audioplayer.play();
})

prebutton.addEventListener('click',()=>{
    if(i<=0)
    {
         i=images.length-1;
        console.log("if from prev"+i);
    }
    else{
        i--;
        console.log("else from prev"+i);
    }
    image.src="/netflix/images/"+images[i]+".jpg";
    audioplayer.src="/netflix/audios/"+audio[i]+".mp3";
    audioplayer.play();
})

 play.addEventListener('click',()=>{

    audioplayer.play();
 })

Pause.addEventListener('click',()=>{
    audioplayer.pause();
})
vup.addEventListener('click',()=>{
    audioplayer.volume+=0.1; 
    console.log(audioplayer.volume);

})

vdown.addEventListener('click',()=>{
    audioplayer.volume-=0.1;
    console.log(audioplayer.volume);
})

Rst.addEventListener('click',()=>{ 
    audioplayer.currentTime=0;
    audioplayer.pause();

})




