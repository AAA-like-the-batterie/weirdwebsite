const audio = document.getElementById('myAudio');
  const btn = document.getElementById('playPauseBtn');

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '⏸ Pause';
    } else {
      audio.pause();
      btn.textContent = '▶️ Play';
    }
  });

