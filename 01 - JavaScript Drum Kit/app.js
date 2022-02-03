// make the rigt sound when key is pressed
// Deconstruct
// make any sound if a to l is pressed
  // get keys
  // get key according to key that was pressed
  // listen for a key pressed
  // make a sound if that key pressed

const keysDiv = document.querySelector('body')
console.log(keysDiv)
const keyA = document.querySelectorAll('[data-key = "65"');
console.log(keyA);



keysDiv.addEventListener('keydown', (e) => {
  playKey(e);
});

function playKey(e){
  a = 65;
  if(e.keyCode === a){
    keyA[1].play();
  }
}

function payAudio(){
  keyA.play();
}