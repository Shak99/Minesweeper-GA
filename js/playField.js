console.log("This is the Minesweeper game!")

let boardSize = 10;
let board = document.querySelector('.board')
let board2 = document.querySelector('.board2')
let numOfBombs = (boardSize ** 2) * 0.16;
let bombArr = [];
let cellsCleared = []
let firstClick = false;
let startCLick = false;
let change = false;
let maxFreeCells = (boardSize**2) - numOfBombs
let cleared = 0


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
            box.innerHTML = 'test'
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

const selected = document.querySelectorAll('.cell')
for (const btnSelect of selected) {
  btnSelect.addEventListener('click', function(event) {
    console.log('button clicked called')
    if(startCLick === true && firstClick === false){ //initiate firstClick and clear come cells and call assign bombs
        firstClick = true;
        console.log("should call assign bomb next!!!!")
        assignBomb();
        //firstClick = true
    }
    if(startCLick === false && firstClick === false){ //clear some cells/set bombs off green -> red
        return
    }
    /*
    if(startCLick === true && firstClick === false){
        firstClick = true;
        assignBomb()
    }*/
    if (firstClick === false){
        firstClick = true;
        console.log("should call assign bomb next!!!!")
        assignBomb();
    }

    let id = btnSelect.id;
    console.log(btnSelect.id)
    //btnSelect.style.backgroundColor = 'purple'

    
    if(arrayBombs.includes(id)){
        btnSelect.style.backgroundColor = 'purple'
    }
    let td = document.getElementById(id)
    td.style.backgroundColor = 'red'

    //let td = document.querySelectorAll('td')
    //let tdEl = td.getElementById(id)

    newSettings(id)


    //btnSelect.style.backgroundColor = 'ff0000'
    //select td to change red
    console.log(`buttons ${id} work `);
    found = false;
  })
}

/*
//assign bombs
let cellsCleared = [3,36,98,55]
let bombArr = []
boardSize = 10
let index = 99

function assignBomb(){
    let numOfBombs = (boardSize ** 2) * 0.16;
    console.log(numOfBombs)

    while (bombArr.length < numOfBombs){ //if array is not filled
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

}

function checkValues(num, arrayB, arrayA){

    if(arrayB.includes(num) === arrayA.includes(num))
        return arrayB.includes(num)
}
////////////////// worked with changing color to red
    //let id = btnSelect.id;
    //console.log(btnSelect.id)
    //btnSelect.style.backgroundColor = 'purple'
    let td = document.getElementById(id)
    td.style.backgroundColor = 'red'
/////////////////
*/

/*
function assignBomb(){
    let numOfBombs = (boardSize ** 2) * 0.16;
    console.log(numOfBombs)

    while (bombArr.length < numOfBombs){ //if array is not filled
        const random = Math.floor(Math.random() * (index+1))

        bombArr.forEach(function(i){
                if(rand === i){ //if already in array...
                    doubleCheck();
                } else {
                    bombArr.push(random)
                }
        })
        

        function doubleCheck(rand){ //get another random number to check
            random = Math.floor(Math.random() * (index+1))
            while (bombArr.length < numOfBombs){
                bombArr.forEach(function(i){
                    if(rand === i){
                        doubleCheck();
                    } else {
                        bombArr.push(random)
                    }
                })
            }
        console.log(random)
        }
    }
    console.log(bombArr)
}*/