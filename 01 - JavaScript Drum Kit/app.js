// make the rigt sound when key is pressed
// Deconstruct
// make any sound if a to l is pressed
  // get keys
  // get key according to key that was pressed
  // listen for a key pressed
  // make a sound if that key pressed
  // select the right audio from the DOM with << `` >>, which allow us to put a variable into a str
    //with this we select the right audio file, inserting the keyCode pressed in to the str.
    // play the audio, but rewind it every time the key is pressed, so in can be play over and over

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