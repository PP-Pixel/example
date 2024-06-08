//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access')
if (!access) {
    flag = true;
    $.cookie('access', false);
} else {
    flag = true;
}

//モーダル表示
$(".modal-open").modaal({
    start_open: flag, // ページロード時に表示するか
    overlay_close: true,//モーダル背景クリック時に閉じるか
    before_open: function () {// モーダルが開く前に行う動作
        $('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
    },
    after_close: function () {// モーダルが閉じた後に行う動作
        $('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
    }
});

window.addEventListener('pageshow', () => {
    if (window.performance.navigation.type == 2) location.reload();
});

function checkInput() {
    // 入力欄の値を取得
    const nameInput = document.getElementById("name");
    const inputValue = nameInput.value.trim(); // 前後の空白を削除

    // 入力欄に文字が入力されているか確認
    if (inputValue !== "") {
        // ../anti-scam/ に遷移
        window.location.href = "../anti_scam/";
    } else {
        // 何もしない
        // 必要であれば、ここにエラーメッセージを表示する処理などを追加できます。
    }
}