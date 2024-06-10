// const form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {
//     event.preventDefault(); // デフォルトの送信動作をキャンセル

//     // 入力値を取得
//     const name = document.getElementById("name").value;
//     const birthday = document.getElementById("birthday").value;
//     const postcode = document.getElementById("postcode").value;
//     const address = document.getElementById("address").value;
//     const tel = document.getElementById("tel").value;
//     const email = document.getElementById("email").value;

//     // 入力値を利用して何か処理を行う
//     // 例: コンソールに出力
//     console.log("名前:", name);
//     console.log("生年月日:", birthday);
//     console.log("郵便番号:", postcode);
//     console.log("住所:", address);
//     console.log("電話番号:", tel);
//     console.log("メールアドレス:", email);

//     // フォームをリセット
//     form.reset();
// });

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 入力値を取得 (省略)

    // Google App Script にデータを送信
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
        .then(response => response.text())  // レスポンスをテキストとして取得
        .then(message => {  // Google App Script からの戻り値
            console.log(message);  // "データが送信されました！"

            // フォームをリセット
            form.reset();

            // ここで入力値を利用した処理などを行う
        })
        .catch(error => {
            console.error("エラーが発生しました:", error);
        });
});