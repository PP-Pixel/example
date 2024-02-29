// 画像にホバーしたときに情報を表示する
const img = document.querySelector("img");
img.addEventListener("mouseover", () => {
  const info = document.querySelector(".info");
  info.style.opacity = 1;
});

// 画像から離れたときに情報を非表示にする
img.addEventListener("mouseout", () => {
  const info = document.querySelector(".info");
  info.style.opacity = 0;
});