// 問題の表示
function showQuestion() {
  document.getElementById("question").textContent = "せいかいは..?";
}

// 回答のチェック
function checkAnswer() {
  const answer = document.getElementById("answer").value;
  const correctAnswer = "3";

  if (answer === correctAnswer) {
    // 正解の場合
    window.location.href = "https://pp-pixel.github.io/example/abus/2/";
  } else {
    // 不正解の場合
    window.location.href = "./M/";
  }
}

// ボタン押下時の処理
document.getElementById("submit").addEventListener("click", checkAnswer);

// 初期表示
showQuestion();
const input = document.querySelector("input");
input.autocomplete = "off";
// 1~3のみ入力
input.addEventListener("input", () => {
  const value = input.value;
  if (!/^(1|2|3)$/.test(value)) {
    input.value = "";
  }
});

// 表示する画像のファイル名を配列に格納する
const imageNames = ["1mage.png", "2mage.png"];

// 配列からランダムに画像を取得する
const imageName = imageNames[Math.floor(Math.random() * imageNames.length)];

// 取得した画像を表示する
document.querySelector("#image1").src = imageName;

// 表示しない画像の ID を取得する
const imageId = "image2";

// 表示しない画像の display プロパティを none に設定する
document.querySelector("#" + imageId).style.display = "none";

const audio = new Audio('1.mp3');
audio.volume = 0.5; // 音量を50%に設定
 
document.getElementById('b-audio').addEventListener('mouseenter', () => {
  audio.play();
});

document.getElementById('info-audio').addEventListener('click', () => {
  audio.play();
});