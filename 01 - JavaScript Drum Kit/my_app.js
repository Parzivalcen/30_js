const keysDiv = document.querySelector('body')
console.log(keysDiv)




keysDiv.addEventListener('keydown', (e) => {
  playAudio(e);
});
keysDiv.addEventListener('keyup', (e) => {
  removeAnimation(e);
});

// Play Audio
function playAudio(e){
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  if(!audio) return; // stops the function
  // console.log(audio);
  audio.currentTime = 0; // rewinds the audio, so it can be played over and over againg 
  audio.play();
  
  // ANITMATION
  const keys = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  keys.classList.add('playing');
  // removeAnimation(e);
}

// Animate
// Select key that was pressed
// add a the class .playing to it
// remove the class .playing on key up

// function animate(e){
//   const keys = document.querySelector(`div[data-key = "${e.keyCode}"]`);
//   keys.classList.add('playing');
  
// }
function removeAnimation(e){
  const keys = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  if(!keys)return //stops
  keys.classList.remove('playing');
}