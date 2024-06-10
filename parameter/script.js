// URL のクエリパラメータを取得
const urlParams = new URLSearchParams(window.location.search);

// send パラメータの値を取得 (デフォルトは false)
const sendValue = urlParams.get('send') === 'True';

// 要素を取得
const trueContent = document.getElementById("true-content");
const falseContent = document.getElementById("false-content");

// send パラメータの値によって表示を切り替え
if (sendValue) {
    trueContent.classList.remove("hidden");
} else {
    falseContent.classList.remove("hidden");
}