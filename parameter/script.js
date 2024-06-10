// URL のクエリパラメータを取得
const urlParams = new URLSearchParams(window.location.search);

// param パラメータの値を取得 (デフォルトは false)
const sendValue = urlParams.get('param') === 'True';

// 要素を取得
const trueContent = document.getElementById("true-content");
const falseContent = document.getElementById("false-content");

// param パラメータの値によって表示を切り替え
if (sendValue) {
    trueContent.classList.remove("hidden");
} else {
    falseContent.classList.remove("hidden");
}

// const paramToggle = document.getElementById("param-toggle");
// const trueContent = document.getElementById("true-content");
// const falseContent = document.getElementById("false-content");

// function updateURL(paramValue) {
//     const newURL = new URL(window.location);
//     newURL.searchParams.set('param', paramValue);
//     window.history.pushState({}, '', newURL);
// }

// function toggleContent() {
//     if (paramToggle.checked) {
//         trueContent.classList.remove("hidden");
//         falseContent.classList.add("hidden");
//         updateURL('True');
//         document.title = "True|クエリパラメータによる表示切替"; // タイトル変更
//     } else {
//         trueContent.classList.add("hidden");
//         falseContent.classList.remove("hidden");
//         updateURL('False');
//         document.title = "False|クエリパラメータによる表示切替"; // タイトル変更
//     }
// }

const paramToggle = document.getElementById("param-toggle");
// const trueContent = document.getElementById("true-content");
// const falseContent = document.getElementById("false-content");

function updateURL(paramValue) {
    const newURL = new URL(window.location);
    newURL.searchParams.set('param', paramValue);
    window.history.pushState({}, '', newURL);
}

function toggleContent() {
    if (paramToggle.checked) {
        trueContent.classList.remove("hidden");
        falseContent.classList.add("hidden");
        updateURL('True'); // URLを更新
    } else {
        trueContent.classList.add("hidden");
        falseContent.classList.remove("hidden");
        updateURL('False'); // URLを更新
    }
}

// 初期表示時の設定 (URLパラメータも考慮)
// const urlParams = new URLSearchParams(window.location.search);
const initialParamValue = urlParams.get('param') || 'True'; // デフォルトはTrue
paramToggle.checked = initialParamValue === 'True';
toggleContent();

// チェックボックスの変化を監視
paramToggle.addEventListener("change", toggleContent);