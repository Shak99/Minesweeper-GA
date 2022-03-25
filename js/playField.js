console.log("This is the Minesweeper game!")

let boardSize = 10;
let board = document.querySelector('.board')
let board2 = document.querySelector('.board2')
let numOfBombs = Math.floor((boardSize ** 2) * 0.2);
let bombArr = [];
let cellsCleared = []
let firstClick = false;
let startCLick = false;
let change = false;
let maxFreeCells = (boardSize**2) - numOfBombs
let cleared = 0
let gameoverBool = false
let startBtn = document.querySelector('#start')
let tdBox = document.querySelector('td')
let body = document.querySelector('body')
let pic = document.querySelector('img')
let winPic = "win.png"
let losePic = "lose.png"
let count = []
let changeCellClass = document.querySelector('.cell')

let index = 0;
setBoard();
///////////////////////////////////////////////////////////////////////////////////////

function setBoard(){
    index = 0;

    for(let i = 0; i < (boardSize); i++){

        let row = document.createElement('tr');
        row.class = 'grid'

        for(let j = 0; j < (boardSize); j++){
            let box = document.createElement('td')
            let btn = document.createElement('button');
            box.id = index
            //box.className = 'cell'

            if(change === false){
                if(index % 2 === 0){
                box.style.backgroundColor = '#048000';
                box.innerHTML = 'test'
                btn.appendChild(box)
                btn.className = 'cell1'
                } else {
                box.style.backgroundColor = '#0bc905';
                btn.appendChild(box)
                btn.className = 'cell2'
                }
            }

            if(change === true){
                if(index % 2 === 0){
                    box.style.backgroundColor = '#0bc905';
                    btn.appendChild(box)
                    btn.className = 'cell2'
                } else {
                    box.style.backgroundColor = '#048000';
                    btn.appendChild(box)
                    btn.className = 'cell1'
                }
            }
            btn.id = index;
            btn.className = 'cell'
            if(j == (boardSize-1)){
                change = !change;
            }
        
            btn.onclick = 'checkCell(this.id)';
            row.appendChild(btn)
            index++;
        }
        board2.appendChild(row)

    }
}

///////////////////////////////////////////////////////////////////////////////////////
function assignBomb(){
    if(firstClick === true){
        while (bombArr.length < numOfBombs){ 
            let random = Math.floor(Math.random() * (index))
            let uniqueNum = checkValues(random, bombArr, cellsCleared)

            console.log(uniqueNum)
            if (uniqueNum === false){
                bombArr.push(random)
            } else {
                continue;
            }
        }
    
        console.log(bombArr)

        checkNeighbors()
    }
}

const selected = document.querySelectorAll('.cell')
for (const btnSelect of selected) {
  btnSelect.addEventListener('click', function(event) {

    //holds button id
    let id = parseInt(btnSelect.id); 

    //if start is clicked and it's the first click then assign the bombs
    if (startCLick === true && firstClick === false && gameoverBool === false){
        bombArr = []
        firstClick = true;
        cellsCleared.push(id)
        assignBomb();
    }

    let td = document.getElementById(id)
    let result = isBomb(id) //true or false

    if(gameoverBool === false && startCLick === true){
        if (isBomb(id) === false){
            td.style.backgroundColor = '#f8f298'
            if(cellsCleared.includes(id) === false){
                cellsCleared.push(id)
            }
            if(cellsCleared.length === maxFreeCells){
                winner()
            }
            //tdBox.getElementById(id).innerHTML = count[id]
        } 
        if (isBomb(id) === true){
            td.style.backgroundColor = 'red'
            startCLick = false
            GameOver();
        }
    }

    console.log(`buttons ${id} work `);
    found = false;
  })
}

function isBomb(idVal){
    //console.log('is a bomb called')
    if(bombArr.includes(idVal)){
        return true
    } else {
        cleared++
        return false
    }
    
}
















let tdArray = Array.from(document.querySelectorAll('td')) //grabs all the td elements
            let correctTd = tdArray.find(td => parseInt(td.id) === id) //find the id within the td elements
            correctTd.innerHTML = count[id]
            correctTd.style.fontSize = '14px'
            correctTd.style.color = '#f8f298'
            //correctTd.style.fontWeight = '40%'
            correctTd.setAttribute('position', 'center')
            //document.getElementById(id).innerHTML = count[id]