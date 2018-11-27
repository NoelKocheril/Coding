let grid;
let cols = 10;
let rows = 10;
function setup() {
  createCanvas(400, 400);
  grid = make2DArray(cols, rows);
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      grid[i][j] = floor(random(100));
    }
  }
}

function draw() {
  background(51);
}

/**
*
*/
function make2DArray(_cols, _rows){
  let arr = new Array(_cols);
  for (let i = 0; i < arr.length; i++){
    arr[i] = new Array(_rows);
  }
  return arr;
}
