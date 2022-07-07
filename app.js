const indexColor = document.querySelector('.index__color');

let colorStorage = [];

function change() {
    let changeIndex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
    let setIndex = '';
    

    for (let i = 0; i <= 5; i++) {
        let colorIndex = Math.floor(Math.random() * changeIndex.length)
        setIndex += changeIndex[colorIndex]; 
    };

    let colorSafe = {
        color: setIndex
    };
    
    indexColor.innerHTML = colorSafe.color;
    colorStorage.push(colorSafe);
    document.getElementById('colorBackgroundBlock').style.backgroundColor = '#' + colorSafe.color;
    console.log(colorStorage);
};


function remove(index) {
    colorStorage.forEach(() => {
        if(colorStorage[colorStorage.length-1]){
            colorStorage.splice(index, 1)
            console.log(colorStorage)
        }
    })
        
}

