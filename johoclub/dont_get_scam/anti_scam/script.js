// javascript:(function(){location.href=location.href.replace(/\?.*$/,'');})();


// 移動先のページの URL を取得する
// const url = "../beware_of_scams/";

// 40秒後に移動するイベントを割り当てる
setTimeout(() => {
    location.href = "../beware_of_scams/";
}, 40000);

let timeLeft = 600;
// 10分 = 600秒
const timerElement = document.getElementById('timer');
const progressBarElement = document.querySelector('.progress');

setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const progress = (timeLeft / 600) * 100;
    progressBarElement.style.width = `${progress}%`;

    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
        location.href = "../beware_of_scams/";
    }
}, 1000);

// function checkInput() {
//     // 入力欄の値を取得
//     const nameInput = document.getElementById("name");
//     const inputValue = nameInput.value.trim(); // 前後の空白を削除

//     // 入力欄に文字が入力されているか確認
//     if (inputValue !== "") {
//         // ../anti-scam/ に遷移
//         window.location.href = "../beware_of_scams/";
//     } else {
//         // 何もしない
//         // 必要であれば、ここにエラーメッセージを表示する処理などを追加できます。
//     }
// }