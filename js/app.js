console.log("This is the Minesweeper game!")

let boardSize = 10;
let board = document.querySelector('.board')
let board2 = document.querySelector('.board2')
let numOfBombs = (boardSize ** 2) * 0.3;
let bombArr = [];
let cellsCleared = []
let firstClick = false;
let startCLick = false;
let change = false;
let maxFreeCells = (boardSize**2) - numOfBombs
let cleared = 0
let gameoverBool = false


let index = 0;
setBoard();
///////////////////////////////////////////////////////////////////////////////////////
//Reset
function setBoard(){
    index = 0;
    console.log('set board called')
    //bombArr.length = 0;
    //cellsCleared.length = 0;
    //let change = false;
    /*if(firstClick === true){
        firstClick = false;
    }*/

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
                btn.appendChild(box)
                } else {
                box.style.backgroundColor = '#0bc905';
                btn.appendChild(box)
                }
            }

            if(change === true){
                if(index % 2 === 0){
                    box.style.backgroundColor = '#0bc905';
                    btn.appendChild(box)
                } else {
                    box.style.backgroundColor = '#048000';
                    btn.appendChild(box)
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
    //let numOfBombs = (boardSize ** 2) * 0.16;
    console.log('assignBomb called')
    console.log(numOfBombs)
    //if array is not filled
    while (bombArr.length < numOfBombs){ 
        let random = Math.floor(Math.random() * (index+1))
        let uniqueNum = checkValues(random, bombArr, cellsCleared);                                                                                 
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
///////////////////////////////////////////////////////////////////////////////////////
function isBomb(idVal){
    console.log('is a bomb called')
    if(bombArr.includes(idVal)){
        return true
    } else {
        cleared++
        return false
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////
function checkValues(num, arrayB, arrayA){
    console.log('checkValues called')
    let result;
    if(arrayB.includes(num) === arrayA.includes(num))
        return arrayB.includes(num)
}

///////////////////////////////////////////////////////////////////////////////////////
//make event listeners for all the tr elements and buttons
//let selected = document.querySelectorAll('.cell')
//selected.addEventListener('click', checkCell);
document.querySelector('#start').addEventListener('click', playGame);//playGame);

function playGame(){

    console.log('play game called')
    firstClick = false;
    startCLick = true;
    gameoverBool = false;

    for(let i = 0; i <= index; i++){
        let tdEl = document.getElementById(i)
        tdEl.style.backgroundColor = '#3d8a3d'
    }

    bombArr = []
    //setBoard(); //make board

}
///////////////////////////////////////////////////////////////////////////////////////
//This is function checkCell
startClick = true; firstClick = false
const selected = document.querySelectorAll('.cell')
for (const btnSelect of selected) {
  btnSelect.addEventListener('click', function(event) {
    console.log('button clicked called')
    /*if(startCLick === true && firstClick === false){ //initiate firstClick and clear come cells and call assign bombs
        firstClick = true;
        console.log("should call assign bomb next!!!!")
        assignBomb();
        //firstClick = true
    }
    if(startCLick === false && firstClick === false){ //clear some cells/set bombs off green -> red
        return
    }*/
    /*
    if(startCLick === true && firstClick === false){
        firstClick = true;
        assignBomb()
    }*/
    if (firstClick === false && gameoverBool === false){
        bombArr = []
        firstClick = true;
        console.log("should call assign bomb next!!!!")
        assignBomb();
    }

    //holds button id
    let id = parseInt(btnSelect.id); 
    console.log(btnSelect.id)

    let td = document.getElementById(id)
    
    let result = isBomb(id)
    console.log(`cell ${id} is ${result}`)

    if(gameoverBool === false){
        if (isBomb(id) === false){
            td.style.backgroundColor = '#f8f298'
        } 
        if (isBomb(id) === true){
            td.style.backgroundColor = 'red'
            GameOver();
        }
    }
    if(cleared === maxFreeCells){
        winner()
    }

    console.log(`buttons ${id} work `);
    found = false;
  })
}

function GameOver(){
    console.log('You lose! :-((( Too bad')

    gameoverBool = true
    bombArr.forEach(function(e){
        let tdEl = document.getElementById(e)
        tdEl.style.backgroundColor = 'red'
    })

    bombArr.forEach(function(i){
        bombArr.pop()
    })

    firstClick = false;
    startCLick = false;

}
function winner(){
    gameoverBool = true
    startCLick = false
    console.log('You Win!!!!!')
}


///////////////////////////////////////////////////////////////////////////////////////
let count = []
function checkNeighbors(){
    
    for(let i = 0; i <= index; i++){
        let total = 0;
        
        //not including edges
        if(i > 9 &&  i < (index - 10)){
            if (bombArr.includes(i+1)){
                total++
            }
            if (bombArr.includes(i-1)){
                total++
            }
            if (bombArr.includes((i+10)+1)){
                total++
            }
            if (bombArr.includes((i+10)-1)){
                total++
            }
            if (bombArr.includes((i-10)+1)){
                total++
            }
            if (bombArr.includes((i-10)-1)){
                total++
            }
            if (bombArr.includes(i-10)){
                total++
            }
            if (bombArr.includes(i+10)){
                total++
            }

            //first row
            if(i > 0 && i < 9){
                if (bombArr.includes(i+1)){
                    total++
                }
                if (bombArr.includes(i-1)){
                    total++
                }
                if (bombArr.includes((i+10)+1)){
                    total++
                }
                if (bombArr.includes((i+10)-1)){
                    total++
                }
            }
            //last row
            if(i > (index-10) && i < index){
                if (bombArr.includes(i+1)){
                    total++
                }
                if (bombArr.includes(i-1)){
                    total++
                }
                if (bombArr.includes((i-10)+1)){
                    total++
                }
                if (bombArr.includes((i-10)-1)){
                    total++
                }
            }



        }




        if(i < 10){
            
        }

        count.push(total)
    }
    console.log(count)
}
