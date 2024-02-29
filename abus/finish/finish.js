const audio = new Audio('finish.mp3');
audio.volume = 0.5; // 音量を50%に設定
 
document.getElementById('b-audio').addEventListener('mouseenter', () => {
  audio.play();
});

document.getElementById('info-audio').addEventListener('click', () => {
  audio.play();
});