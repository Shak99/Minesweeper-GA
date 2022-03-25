//This is just snippets of code that didn't work, but I may want to pull from it later

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


//console.log('found ' + bombArr.includes(8))
///////////////////////////////////////////////////////////////////////////////////////
/*
bombArr.forEach(function(i){
    if(id === i){
        found == true
    } else {
        false
    }
})
if (found === true){
    btnSelect.style.backgroundColor = 'ff0000'
} else {
    btnSelect.style.backgroundColor = 'f8f298'
}
*/

/*selected.addEventListener('click', e => {
    console.log("button clicked", e.target.id, e.target.innerHTML);
})*/


/*let box = document.createElement('div');
box.style.backgroundColor = '#048000';
board.appendChild(box);*/


//gets random num within bounds
//const randIndex = Math.floor(Math.random() * WORDS.length)





/*
            if(bombArr.includes(id+1) === false && cellsCleared.includes(id+1) === false){
               if(id+1 >= 0 && id+1 < index){
                let newTD = document.querySelector(`.ID${id+1}`)
                newTD.innerHTML = count[id+1]
                newTd.style.fontSize = '14px'
                newTd.style.color = '#f8f298'
                newTd.style.fontWeight = 'bold'
                let newButton = document.getElementById(id+1)
                newButton.style.backgroundColor = '#f8f298'
                cellsCleared.push(id+1)
               }
            }*/
