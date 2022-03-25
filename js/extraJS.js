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



//let newID;
//let newTD;
/*
if(cellsCleared.includes(id+1) == false && bombArr.includes(id+1) === false){
    newID = id + 1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[id + 1]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
}
if(cellsCleared.includes(id-1) == false && bombArr.includes(id-1) === false){
    newID = id - 1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes(i+10) == false && bombArr.includes(id+10) === false){
    console.log("true")
    newID = id + 10
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes(id-10) == false && bombArr.includes(id-10) === false){
    console.log("true")
    newID = id - 10
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes(id-10) == false && bombArr.includes(id-10) === false){
    console.log("true")
    newID = id - 10
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes((id+10)+1) == false && bombArr.includes((id+10)+1) === false){
    console.log("true")
    newID = (id+10)+1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes((id-10)+1) == false && bombArr.includes((id-10)+1) === false){
    console.log("true")
    newID = (id-10)+1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes((id+10)-1) == false && bombArr.includes((id+10)-1) === false){
    console.log("true")
    newID = (id+10)-1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}
if(cellsCleared.includes((id-10)-1) == false && bombArr.includes((id-10)-1) === false){
    console.log("true")
    newID = (id-10)-1
    correctTd = tdArray.find(td => parseInt(td.newID) === newID) //find the id within the td elements
    correctTd.innerHTML = count[newID]

    newTD = document.getElementById(newID)
    td.style.backgroundColor = '#f8f298'
    cellsCleared.push(newID)
}*/


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




//extra html/css
/*

<div id="intro-screen"> 
        <div id="introContent"><h1>🏆You Win!!!💫</h1></div>
    </div>


#intro-screen {
    position: absolute;
    z-index: 100;
    width: 370px;
    height: 170px;
    background-color: white;
}

#introContent{
    width: 300px;
    height: 100px;
    padding:20px;
    background-color: black;
    margin: 80 auto;
    margin-top: 15px;
    text-align: center;
}
*/