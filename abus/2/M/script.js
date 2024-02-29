// 移動先のページの URL を取得する
const url = "https://pp-pixel.github.io/example/abus/2/";

// 10秒後に移動するイベントを割り当てる
setTimeout(() => {
  window.location.href = url;
}, 5000);

// 続きを表示する
const container = document.querySelector("#container");

// 続きを表示する処理
function showMoreText() {
  document.querySelector("#more-text").style.display = "block";
}

// 続きを表示するイベントを割り当てる
container.querySelector("#more").addEventListener("click", showMoreText);

// // 画像にホバーしたときに情報を表示する
// const img = document.querySelector("img");
// img.addEventListener("mouseover", () => {
//   const info = document.querySelector(".info-g");
//   info.style.opacity = 1;
// });

// // 画像から離れたときに情報を非表示にする
// img.addEventListener("mouseout", () => {
//   const info = document.querySelector(".info-g");
//   info.style.opacity = 0;
// });

const audio = new Audio('M.mp3');
audio.volume = 0.5; // 音量を50%に設定
 
document.getElementById('b-audio').addEventListener('mouseenter', () => {
  audio.play();
});

document.getElementById('info-audio').addEventListener('click', () => {
  audio.play();
});