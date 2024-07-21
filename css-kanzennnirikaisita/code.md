# CSS完全に理解した
## HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS完全に理解した</title>
</head>
<body>
    <div class="button">
        <div class="button-content">
            <p class="button-text">CSS</p>
            <p class="subtitle">完全に理解した</p>
        </div>
    </div>
</body>
</html>
```
## CSS
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}
.button {
    border: 2px solid black;
    border-radius: 15px;
    padding: 10px 20px;
    display: inline-block;
    position: relative;
    overflow: visible;
    width: 120px;
    height: 60px;
}
.button-content {
    position: absolute;
    left: 75px;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
}
.button-text {
    font-size: 24px;
    margin: 0;
}
.subtitle {
    font-size: 16px;
    margin: 5px 0 0 0;
}
```