console.log("This is the Minesweeper game!")

let boardSize = 10;
let board = document.querySelector('.board')
let board2 = document.querySelector('.board2')
let numOfBombs = Math.floor((boardSize ** 2) * 0.2);
let bombArr = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20];
let cellsCleared = []
let firstClick = false;
let startCLick = false;
let change = false;
let maxFreeCells = (boardSize**2) - numOfBombs
let cleared = 0
let gameoverBool = false
let startBtn = document.querySelector('#start')
let tdBox = document.querySelectorAll('td')
let body = document.querySelector('body')
let pic = document.querySelector('img')
let winPic = "win.png"
let losePic = "lose.png"
let count = []
let changeCellClass = document.querySelector('.cell')
//let audioGood = new Audio("soundfile.wav");
let audioBad = new Audio()

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
            box.className = `ID${index}`
            //box.innerHTML = 'test'
            //box.className = 'cell'
            //box.innerHTML = 'j'

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
///////////////////////////////////////////////////////////////////////////////////////
function isBomb(idVal){
    //console.log('is a bomb called')
    if(bombArr.includes(idVal)){
        return true
    } else {
        cleared++
        return false
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////
function checkValues(num, arrayB, arrayA){
    //double check it's not already in bomb or cleared cells array
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

    //reset everything
    pic.src = "" //take off game result
    firstClick = false; 
    startCLick = true;
    gameoverBool = false;

    bombArr.forEach(function(i){
        bombArr.pop()
    })
    //clear arrays
    bombArr.length = 0
    cellsCleared.length = 0
    count.length = 0;


    


    //reset board
    for(let i = 0; i < index; i++){
        let buttonEl = document.getElementById(i)
        buttonEl.style.backgroundColor = '#3d8a3d'
        let tdEl = document.querySelector(`.ID${i}`)
        tdEl.innerHTML = ""
        //let tdArray = Array.from(document.querySelectorAll('td')) //grabs all the td elements
            // let correctTd = tdArray.find(tdEl => parseInt(tdEl.i) === i) //find the id within the td elements
            // correctTd.innerHTML = count[i]
            // correctTd.style.fontSize = '14px'
            // correctTd.style.color = '#f8f298'
    }

    startBtn.innerHTML = 'Restart Game'

}
///////////////////////////////////////////////////////////////////////////////////////
//This is function checkCell
//startClick = true; firstClick = false
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

    let td = document.getElementById(id) //gets button element
    let result = isBomb(id) //true or false

    if(gameoverBool === false && startCLick === true){
        if (isBomb(id) === false){
            td.style.backgroundColor = '#f8f298'
            if(cellsCleared.includes(id) === false){
                cellsCleared.push(id)
            }

            let tdArray = Array.from(document.querySelectorAll('td')) //grabs all the td elements
            let correctTd = tdArray.find(td => parseInt(td.id) === id) //find the id within the td elements
            correctTd.innerHTML = count[id]
            correctTd.style.fontSize = '14px'
            correctTd.style.color = '#f8f298'
            //correctTd.style.fontWeight = '40%'
            correctTd.setAttribute('position', 'center')
            //document.getElementById(id).innerHTML = count[id]

            if(cellsCleared.length === maxFreeCells){
                winner()
            }
            
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

function GameOver(){
    console.log('You lose! :-((( Too bad')
    startBtn.innerHTML = 'Play Again'

    gameoverBool = true

    bombArr.forEach(function(e){
        let tdEl = document.getElementById(e)
        console.log(tdEl)
        tdEl.style.backgroundColor = 'red'
    })

    pic.src = losePic

    bombArr.forEach(function(i){
        bombArr.pop()
    })

    firstClick = false;
    startCLick = false;

    

}
function winner(){
    gameoverBool = true
    startCLick = false
    pic.src = winPic
    console.log('You Win!!!!!')
    cellsCleared.forEach(function(i){
        cellsCleared.pop()
    })
}


//////////////////////////////////////////////////////////////////////////////////////
//counts how many bombs are around each cell
function checkNeighbors(){
    
    for(let i = 0; i < index; i++){
        let total = 0;
        if(bombArr.includes(i) === false ){
        //not including edges
            if(i >= 0 &&  i < index){
                if (bombArr.includes(i+1)){
                    if((i+1) >= 0 || (i+1) <= 100){
                        addOne();
                    }
                }
                if (bombArr.includes(i-1)){
                    if((i-1) >= 0 || (i-1) < index){
                        addOne();
                    }
                }
                if (bombArr.includes((i+10)+1)){
                    if((i+10)+1 >= 0 || (i+10)+1 < index){
                        addOne();
                    }
                }
                if (bombArr.includes((i+10)-1)){
                    if((i+10)-1 >= 0 || (i+10)-1 < index){
                        addOne();
                    }
                }
                if (bombArr.includes((i-10)+1)){
                    if((i-10)+1 >= 0 || (i-10)+1 < index){
                        addOne();
                    }
                }
                if (bombArr.includes((i-10)-1)){
                    if((i-10)-1 >= 0 || (i+10)-1 < index){
                        addOne();
                    }
                }
                if (bombArr.includes(i-10)){
                    if((i-10) >= 0 || (i-10) < index){
                        addOne();
                    }
                }
                if (bombArr.includes(i+10)){
                    if((i+10) >= 0 || (i-10) < index){
                        addOne();
                    }
                }

                function addOne(){
                    total++
                }
            }

        } else {
            total = null
        }
        count.push(total)
        //tdBox.innerHTML = "mo"
    }
    console.log(count)
}

/*function clear(id){
    let tdArray = Array.from(document.querySelectorAll('td')) //grabs all the td elements

    if(bombArr.includes(id) === false){
        td.style.backgroundColor = '#f8f298'
        cellsCleared.push(id)
        let correctTd = tdArray.find(td => parseInt(td.id) === id)
        correctTd.innerHTML = count[id]
        correctTd.style.fontSize = '14px'
        correctTd.style.color = '#f8f298'
    }

    if(bombArr.includes(id+1) === false){
        td.style.backgroundColor = '#f8f298'
        cellsCleared.push(id+1)
        let correctTd = tdArray.find(td => parseInt(td.id) === id+1)
        correctTd.innerHTML = count[id+1]
        correctTd.style.fontSize = '14px'
        correctTd.style.color = '#f8f298'
    }
    /*
    id-1

    id+10
    (id-10)-1
    (id-10)+1

    id+10
    (id+10)-1
    (id+10)+1
    

}*/
