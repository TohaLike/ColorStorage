const indexColor = document.querySelector('.index__color');
const colorBackground = document.querySelector('.colorBackground');

let colorStorage = [];

if (localStorage.getItem('color')) {
    colorStorage = JSON.parse(localStorage.getItem('color'));
    indexColor.innerHTML = colorStorage[colorStorage.length - 1];
    colorBackground.style.backgroundColor = '#' + colorStorage[colorStorage.length - 1];
    if (colorStorage.length === 0) {
        indexColor.innerHTML = '00000';
    };
};

function change() {
    let changeIndex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
    let setIndex = '';
    for (let i = 0; i <= 5; i++) {
        let colorIndex = Math.floor(Math.random() * changeIndex.length);
        setIndex += changeIndex[colorIndex]; 
    };
    let colorSafe = {
        color: setIndex
    };
    indexColor.innerHTML = colorSafe.color;
    colorStorage.push(colorSafe.color);
    colorBackground.style.backgroundColor = '#' + colorStorage[colorStorage.length - 1];
    localStorage.setItem('color', JSON.stringify(colorStorage));
};

const remove = (index) => {
    if (!colorStorage.length) return;
    colorStorage.pop(index, 1);
    indexColor.innerHTML = colorStorage[colorStorage.length - 1];
    colorBackground.style.backgroundColor = '#' + colorStorage[colorStorage.length - 1];
    if (colorStorage.length === 0) {
        indexColor.innerHTML = '00000';
        colorBackground.style.backgroundColor = 'white';
    };
    localStorage.setItem('color', JSON.stringify(colorStorage));
};

