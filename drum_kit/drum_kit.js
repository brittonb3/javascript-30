





window.addEventListener("keydown", function(e){
  const code = e.keyCode;
  const audio = document.querySelector('audio[data-key=' + '"' + code + '"' + ']');
  let playing = null;


  audio.play();


  window.addEventListener("keydown", function(e){
    audio.pause();

  });

});
