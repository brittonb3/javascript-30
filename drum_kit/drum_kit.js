





window.addEventListener("keydown", function(e){
  const code = e.keyCode;
  const audio = document.querySelector('audio[data-key=' + '"' + code + '"' + ']');
  const key = document.querySelector('.key[data-key=' + '"' + code + '"' + ']');
  key.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;
});


  function removeTransition(e) {
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing');

  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


  // audio.play();
