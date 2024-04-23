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
    })

    // const targetImage = document.getElementById('target-image'); // 移動させたい画像

    let startX = 0; // タッチ開始時のX座標
    let startY = 0; // タッチ開始時のY座標
    // let initialDistance = null; // 最初の2点間の距離
    // let scale = 1; // 現在の拡大率（初期値は1）
    let translateX = 0; // 現在のX方向への移動距離
    let translateY = 0; // 現在のY方向への移動距離

    function getDistance(touches) {
        const dx = touches[0].pageX - touches[1].pageX;
        const dy = touches[0].pageY - touches[1].pageY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    targetImage.addEventListener('touchstart', function (e) {
        e.preventDefault(); // ページのスクロールを防ぐ
        if (e.touches.length === 1) {
            startX = e.touches[0].pageX - translateX;
            startY = e.touches[0].pageY - translateY;
        } else if (e.touches.length === 2) {
            initialDistance = getDistance(e.touches);
        }
    }, { passive: false });

    targetImage.addEventListener('touchmove', function (e) {
        e.preventDefault(); // ページのスクロールを防ぐ
        if (e.touches.length === 1) {
            translateX = e.touches[0].pageX - startX;
            translateY = e.touches[0].pageY - startY;
            this.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        } else if (e.touches.length === 2) {
            const distance = getDistance(e.touches);
            if (initialDistance !== null) {
                scale = distance / initialDistance;
                this.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            }
        }
    }, { passive: false });

    targetImage.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) {
            initialDistance = null; // タッチ終了時に初期化
        }
    });

    let initialDistance = null; // 最初の2点間の距離

    function getDistance(touches) {
        const dx = touches[0].pageX - touches[1].pageX;
        const dy = touches[0].pageY - touches[1].pageY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    targetImage.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) { // 2本指での操作を確認
            e.preventDefault(); // ページのスクロールとズームを防ぐ
            const distance = getDistance(e.touches);

            if (initialDistance === null) {
                initialDistance = distance; // 最初の距離を設定
            } else {
                const scale = distance / initialDistance; // 拡大/縮小率を計算
                this.style.transform = `scale(${scale})`;
            }
        }
    }, { passive: false });

    targetImage.addEventListener('touchend', function (e) {
        initialDistance = null; // タッチ終了時に初期化
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
