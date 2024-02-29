// 移動先のページの URL を取得する
const url = "https://pp-pixel.github.io/example/abus/3/";

// 25秒後に移動するイベントを割り当てる
setTimeout(() => {
  window.location.href = url;
}, 25000);

const audio = new Audio('sound.mp3');
audio.volume = 0.5; // 音量を50%に設定
 
document.getElementById('b-audio').addEventListener('mouseenter', () => {
  audio.play();
});

document.getElementById('info-audio').addEventListener('click', () => {
  audio.play();
});