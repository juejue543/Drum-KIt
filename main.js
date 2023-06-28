
class Drum{
    constructor(number, keyboard){
        this.number = number;
        this.keyboard = keyboard;  
    }

    play_sound(sound, keyboard){
     document.addEventListener("keydown", function(event){
        if (event.key == keyboard.toLowerCase()){
        var audio = new Audio(sound)
        audio.play()
       console.log(event)
    }
    })
    }
}
let arr = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3","sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
let  letters= ["W", "A", "S", "D", "J", "K", "L"];


for(var i = 0; i < 7; i++){
    let drum = new Drum(i,letters[i] );
    drum.play_sound(arr[i], letters[i])
}
                     
                                        


 


