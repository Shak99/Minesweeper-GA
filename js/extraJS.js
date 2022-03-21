let userBoard = new Array(boardSize); //2D array; This is the board on browser
let oneBigArray = new Array(boardSize ** 2)
console.log(oneBigArray.length)
let bombs; //array that holds bomb cells

//create the userArray and show it on the browser
for(let i = 0; i < boardSize; i++){
    userBoard = new Array(boardSize);
}




for(let i = 0; i < oneBigArray.length; i++){
    //create divs for each cell
    let box = document.createElement('div'); //create individual cell
    box.id = i; //the id will be the index number

    //change background color for odds and even w/ shades of green
    if(i % 2 === 0){
        box.style.backgroundColor = '#048000';
    } else {
        box.style.backgroundColor = '#0bc905';
    }
    //append each box to the browser
    board.appendChild(box)
}







for(let i = 0; i < (boardSize); i++){

    let row = document.createElement('div');
    row.className = 'rowClass';
    row.id = i;

    for(let j = 0; j < (boardSize); j++){

        let box = document.createElement('div'); //create individual cell
        box.id = index;

        if(index % 2 === 0){
            box.style.backgroundColor = '#048000';
        } else {
            box.style.backgroundColor = '#0bc905';
        }
        row.style.flexDirection = 'row';
        index++;
        row.appendChild(box);
    }
    board.appendChild(row);

}