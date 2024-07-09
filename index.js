window.addEventListener('keydown',(e)=>{
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(audio){
        audio.play();
        audio.currentTime=0
        key.classList.add('press')
    }
    return
})
let p=document.querySelectorAll('.key')
p.forEach((e)=>{
    e.addEventListener('transitionend',remove)

})
function remove(p){
    if(p.propertyName="margin-top"){
        this.classList.remove('press')
    }
    return;

}