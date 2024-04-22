document.addEventListener('DOMContentLoaded', function () {
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const targetImage = document.getElementById('target-image');
    let scale = 1;
    const SCALE_STEP = 0.1;
    const MIN_SCALE = 1;
    let isDragging = false;
    let dragStartX, dragStartY;
    let currentTranslate = { x: 0, y: 0 };

    // CSSで画像の選択を無効化
    targetImage.style.userSelect = 'none';
    targetImage.style.webkitUserSelect = 'none'; // Safari用
    targetImage.style.MozUserSelect = 'none'; // Firefox用
    targetImage.style.msUserSelect = 'none'; // IE用

    // transform-originを画像の中心に設定
    targetImage.style.transformOrigin = 'center';

    // 拡大処理
    zoomInButton.addEventListener('click', function () {
        scale += SCALE_STEP;
        updateTransform();
    });

    // 縮小処理
    zoomOutButton.addEventListener('click', function () {
        if (scale > MIN_SCALE) {
            scale -= SCALE_STEP;
            updateTransform();
        }
    });

    // ダブルクリックでリセット
    // targetImage.addEventListener('dblclick', function() {
    //     scale = 1;
    //     currentTranslate.x = 0;
    //     currentTranslate.y = 0;
    //     updateTransform();
    // });

    resetButton.addEventListener('click', function () {
        scale = 1;
        currentTranslate.x = 0;
        currentTranslate.y = 0;
        updateTransform();
    });

    // ドラッグ開始
    targetImage.addEventListener('mousedown', function (e) {
        e.preventDefault(); // ドラッグ時のテキスト選択や画像のドラッグ防止
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        this.style.cursor = 'grabbing';
    });

    // ドラッグ中
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            currentTranslate.x += dx;
            currentTranslate.y += dy;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            updateTransform();
        }
    });

    // ドラッグ終了
    document.addEventListener('mouseup', function () {
        if (isDragging) {
            isDragging = false;
            targetImage.style.cursor = 'grab';
        }
    });

    // 右クリックメニュー非表示設定
    [targetImage, zoomOutButton, zoomInButton].forEach(element => {
        element.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    });

    const imageButtons = document.querySelectorAll('.change-image');
    // const targetImage = document.getElementById('target-image');

    imageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const newImageSrc = this.getAttribute('data-image-src');
            targetImage.src = newImageSrc;
        });
    });

    // transformプロパティの更新
    function updateTransform() {
        targetImage.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px) scale(${scale})`;
    }
});
