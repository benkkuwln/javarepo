const squaresContainer = document.querySelector('#squares');
const numberOfSquares = 16;
let i = 0;

let colors = [
    '#cccc10',
    '#cccc10',
    '#ffcc00',
    '#ffcc00',
    '#1153cc',
    '#1153cc',
    '#3333ff',
    '#3333ff',
    '#63cc11',
    '#63cc11',
    '#ff9835',
    '#ff9835',
    '#dddddd',
    '#dddddd',
    '#000099',
    '#000099',
];

function selectColor() {
   // 0-15
   const random = Math.floor(Math.random() * colors.length);
   const selected = colors[random];
   colors.splice(random, 1);
   return selected;
}

while (i < numberOfSquares) {
    const square = document.createElement('li')
    const color = selectColor();
    square.style.background = color
    squaresContainer.appendChild(square);
    i++;
}

//selectColor();
//selectColor();

//console.log(selectColor());  