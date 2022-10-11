// let firstTime = true
// let secondTime = false
// let thirdTime = false
// let fourthTime = false
// let firstNumber = null
function main(){
    
    //switching the order from rows to square by square
    let puzzle = '--752--6---2--9--8--64-7---768--5--9-31---45-4--3--781---8-43--1--2--8---5--136--'
    let myPuzzle = '---------------------------------------------------------------------------------'
    
    let boxes = document.getElementsByClassName('box')
    let first = true
    
    function reset(){
        boxes = document.getElementsByClassName('box')
        if (first){
            puzzle = puzzle.split('')
            myPuzzle = myPuzzle.split('')
            let i = 0;
            let j = 0;
            for (let x=0; x<3; x++){
                for(let a = 0; a < 3; a++){
                    for(let b = 0; b < 3; b++){
                        for(let c = 0; c < 3; c++){
                            myPuzzle[j] = puzzle[j + i]
                            j++;
                        }
                        i += 6
                    }
                    i -= 24;
                }
                i = 0;
            }
            first = false
            for (let i = 0; i < myPuzzle.length; i++){
            boxes[i].value = ''
        }
        for (let i = 0; i < myPuzzle.length; i++){
            if (myPuzzle[i] != '-'){
                boxes[i].value = myPuzzle[i]
                boxes[i].classList.add('original')
            }
        }
        }
    
    }
    
    reset()
    
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', selectBox)
    }
    
    let checkSelection = false;
    
    function selectBox(){
        boxSelected = this;
        if (!(boxSelected.classList.contains('original'))){
            for (let i = 0; i < boxes.length; i++){
                boxes[i].classList.remove('clicked')
            }
            boxSelected.classList.add('clicked')
            checkSelection = true
        }
        if (boxSelected.classList.contains('original')){
            for (let i = 0; i < boxes.length; i++){
                boxes[i].classList.remove('clicked')
            }
        }
        if (checkSelection){
            if (!(boxSelected.classList.contains('original'))){
                let squares = []
                let index = 0;
                for (let s = 0; s < 9; s++){
                    let myList = []
                    for (let r = 0; r < 9; r++){
                        myList.push(myPuzzle[index])
                        index++
                    }
                    squares.push(myList);
                }
                puzzle = '---------------------------------------------------------------------------------'
                puzzle = puzzle.split('')
                let p = 0;
                let j = 0;
                for (let x=0; x<3; x++){
                    for(let a = 0; a < 3; a++){
                        for(let b = 0; b < 3; b++){
                            for(let c = 0; c < 3; c++){
                                puzzle[j] = myPuzzle[j + p]
                                j++;
                            }
                            p += 6
                        }
                        p -= 24;
                    }
                    p = 0;
                }
            
                let rows = []
                index = 0;
                for (let s = 0; s < 9; s++){
                    let myList = []
                    for (let r = 0; r < 9; r++){
                        myList.push(puzzle[index])
                        index++
                    }
                    rows.push(myList);
                }
                mergedRows = []
                for (let l = 0; l<9; l++){
                    for (let n = 0; n<9; n++){
                        mergedRows.push(rows[l][n])
                    }
                }
                let columns = []
                let ind = 0
                for (let t = 0; t<9; t++){
                    let column = []
                    for (let f = 0; f<9; f++){
                        column.push(mergedRows[ind])
                        ind += 9
                    }
                    columns.push(column)
                    ind = 1;
                    ind += t;
                }
                SRC = [squares,rows,columns]
            }
                boxSelected.addEventListener('keypress', (e)=>{
                    if ((e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9') && checkSelection){      
                        boxSelected.value = e.key
                        boxSelected.classList.remove('clicked')
                        checkSelection = false
                        for (let i = 0; i < boxes.length; i++) {
                            boxes[i].addEventListener('keypress', myFunction.bind(this, i))
                        }
                        // if (fourthTime){
                        //     fourthTime = false
                        //     if (e.key == firstNumber){
                                
                        //     }

                        // }
                        // if (thirdTime){
                        //     thirdTime = false
                        //     fourthTime = true
                        // }

                        // if (secondTime){
                        //     secondTime = false//third and compare it with second
                        //     thirdTime = true
                        //     firstNumber = e.key
                        // }
                        // if (firstTime){
                        //     secondTime = true
                        //     firstTime = false
                        //     for (let i = 0; i < boxes.length; i++) {
                        //         boxes[i].addEventListener('keypress', function(i) {
                        //             if (secondTime){
                        //                 firstPosition = i
                        //             }
                        //         }.bind(this, i));
                        //      }
                        // }
                    }
                })
                squares = SRC[0]
                rows = SRC[1]
                columns = SRC[2]
            }
        }
    
    
    // make the list of numbers a list of rows and squares
    let squares = []
    let index = 0;
    for (let s = 0; s < 9; s++){
        let myList = []
        for (let r = 0; r < 9; r++){
            myList.push(myPuzzle[index])
            index++
        }
        squares.push(myList);
    }
    
    let rows = []
    index = 0;
    for (let s = 0; s < 9; s++){
        let myList = []
        for (let r = 0; r < 9; r++){
            myList.push(puzzle[index])
            index++
        }
        rows.push(myList);
    }
    mergedRows = []
    for (let l = 0; l<9; l++){
        for (let n = 0; n<9; n++){
            mergedRows.push(rows[l][n])
        }
    }
    let columns = []
    let ind = 0
    for (let t = 0; t<9; t++){
        let column = []
        for (let f = 0; f<9; f++){
            column.push(mergedRows[ind])
            ind += 9
        }
        columns.push(column)
        ind = 1;
        ind += t;
    }
    
    //Get the index of a certain elementm
    // for (let i = 0; i < boxes.length; i++) {
    //    boxes[i].addEventListener('click', function(i) {
    //       console.log(i)
    //    }.bind(this, i));
    // }
    
    function myFunction(i,e) {
        SRC = reset2()
        if ((e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9') && checkSelection && (!(e.key == boxSelected.value))){      
    
            boxSelected.classList.remove('red')
            let squareRowColumn = GetSquareRowColumn(i)
            let itsS = squareRowColumn[0]
            let itsR = squareRowColumn[1]
            let itsC = squareRowColumn[2]
            
            if (!(boxSelected.classList.contains('original'))){
                if (!(boxSelected.classList.contains('red'))){
                    myPuzzle[i] = e.key
                }
            }
            
    
            for (let i = 0; i<9; i++){
                if ((squares[itsS][i] == e.key) && !(boxSelected.classList.contains('original'))){
                    boxSelected.classList.add('red')
                }
            }
            for (let i = 0; i<9; i++){
                if ((rows[itsR][i] == e.key) && !(boxSelected.classList.contains('original'))){
                    boxSelected.classList.add('red')
                }
            }
            for (let i = 0; i<9; i++){
                if ((columns[itsC][i] == e.key) && !(boxSelected.classList.contains('original'))){
                    boxSelected.classList.add('red')
                }
            }
            if (!(boxSelected.classList.contains('red'))){
                boxSelected.classList.add('calc')
            }
            checkWin()            
            }
    
            
        // for (let m = 0; m<9; m++){
        //     if((rows[itsR])[m] == (e.key)){
        //         clickedBox[0].classList.add('red')
        //         console.log((rows[itsR])[m])
        //     }
        // }
        // for (let m = 0; m<9; m++){
        //     if((columns[itsC])[m] == (e.key)){
        //         clickedBox[0].classList.add('red')
        //         console.log((columns[itsC])[m])
        //     }
        // }
    
        function reset2(){
            
    
        let squares = []
        let index = 0;
        for (let s = 0; s < 9; s++){
            let myList = []
            for (let r = 0; r < 9; r++){
                myList.push(myPuzzle[index])
                index++
            }
            squares.push(myList);
        }
        puzzle = '---------------------------------------------------------------------------------'
        puzzle = puzzle.split('')
        let p = 0;
        let j = 0;
        for (let x=0; x<3; x++){
            for(let a = 0; a < 3; a++){
                for(let b = 0; b < 3; b++){
                    for(let c = 0; c < 3; c++){
                        puzzle[j] = myPuzzle[j + p]
                        j++;
                    }
                    p += 6
                }
                p -= 24;
            }
            p = 0;
        }
    
        let rows = []
        index = 0;
        for (let s = 0; s < 9; s++){
            let myList = []
            for (let r = 0; r < 9; r++){
                myList.push(puzzle[index])
                index++
            }
            rows.push(myList);
        }
        mergedRows = []
        for (let l = 0; l<9; l++){
            for (let n = 0; n<9; n++){
                mergedRows.push(rows[l][n])
            }
        }
        let columns = []
        let ind = 0
        for (let t = 0; t<9; t++){
            let column = []
            for (let f = 0; f<9; f++){
                column.push(mergedRows[ind])
                ind += 9
            }
            columns.push(column)
            ind = 1;
            ind += t;
        }
        SRC = [squares,rows,columns]
    
        return(SRC)
        }
    }
    
    }
    main()
    let puzzle = '--752--6---2--9--8--64-7---768--5--9-31---45-4--3--781---8-43--1--2--8---5--136--'
    let myPuzzle = '---------------------------------------------------------------------------------'
    
    let boxes = document.getElementsByClassName('box')
    let first = true
    
    function reset(){
        boxes = document.getElementsByClassName('box')
        if (first){
            puzzle = puzzle.split('')
            myPuzzle = myPuzzle.split('')
            let i = 0;
            let j = 0;
            for (let x=0; x<3; x++){
                for(let a = 0; a < 3; a++){
                    for(let b = 0; b < 3; b++){
                        for(let c = 0; c < 3; c++){
                            myPuzzle[j] = puzzle[j + i]
                            j++;
                        }
                        i += 6
                    }
                    i -= 24;
                }
                i = 0;
            }
            first = false
            for (let i = 0; i < myPuzzle.length; i++){
            boxes[i].value = ''
        }
        for (let i = 0; i < myPuzzle.length; i++){
            if (myPuzzle[i] != '-'){
                boxes[i].value = myPuzzle[i]
                boxes[i].classList.add('original')
                boxes[i].classList.add('calc')

            }
        }
        }
    
    }
    
    //idea: add a 82th button. its purpose is to start the game.
    boxes = document.getElementsByClassName('box')
    let startButton = document.getElementById('start')
    let startSec = document.getElementById('startSec')
    let container = document.getElementsByClassName('container')[0]
    let winner = document.getElementById('winner')
    for (let i = 0; i<boxes.length; i++){
        boxes[i].classList.remove('original')
    }
    
    startButton.addEventListener('click', ()=>{
        startButton.textContent = 'Press a number to start'
        startButton.style.backgroundColor = 'orange'
        startButton.addEventListener('keypress', (e)=>{
            if (e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9'){
                startSec.style.display = 'none'
                container.style.display = 'flex'
                startSec.classList.remove('box')
                let puzzle = '--752--6---2--9--8--64-7---768--5--9-31---45-4--3--781---8-43--1--2--8---5--136--'
        let myPuzzle = '---------------------------------------------------------------------------------'
        
        let boxes = document.getElementsByClassName('box')
        let first = true
        
        function reset(){
            boxes = document.getElementsByClassName('box')
            if (first){
                puzzle = puzzle.split('')
                myPuzzle = myPuzzle.split('')
                let i = 0;
                let j = 0;
                for (let x=0; x<3; x++){
                    for(let a = 0; a < 3; a++){
                        for(let b = 0; b < 3; b++){
                            for(let c = 0; c < 3; c++){
                                myPuzzle[j] = puzzle[j + i]
                                j++;
                            }
                            i += 6
                        }
                        i -= 24;
                    }
                    i = 0;
                }
                first = false
                for (let i = 0; i < myPuzzle.length; i++){
                boxes[i].value = ''
            }
            for (let i = 0; i < myPuzzle.length; i++){
                if (myPuzzle[i] != '-'){
                    boxes[i].value = myPuzzle[i]
                    boxes[i].classList.add('original')
                    boxes[i].classList.add('calc')
                }
            }
            }
        
        }
        
        reset()
                myPuzzle[0] = e.key                
            }
        })
    })

    function checkWin(){
        calc = 0
        for (let x = 0; x < boxes.length; x++){
            if (boxes[x].classList.contains('calc')){
                calc += 1
            }
        }
        if (calc == 81){
            container.style.display = 'none'
            winner.style.display = 'flex'
        }
    }
    
    function GetSquareRowColumn(i){
        if (i == 0){
            return([0,0,0])
        }
        if (i == 1){
            return([0,0,1])
        }
        if (i == 2){
            return([0,0,2])
        }
        if (i == 3){
            return([0,1,0])
        }
        if (i == 4){
            return([0,1,1])
        }
        if (i == 5){
            return([0,1,2])
        }
        if (i == 6){
            return([0,2,0])
        }
        if (i == 7){
            return([0,2,1])
        }
        if (i == 8){
            return([0,2,2])
        }
        if (i == 9){
            return([1,0,3])
        }
        if (i == 10){
            return([1,0,4])
        }
        if (i == 11){
            return([1,0,5])
        }
        if (i == 12){
            return([1,1,3])
        }
        if (i == 13){
            return([1,1,4])
        }
        if (i == 14){
            return([1,1,5])
        }
        if (i == 15){
            return([1,2,3])
        }
        if (i == 16){
            return([1,2,4])
        }
        if (i == 17){
            return([1,2,5])
        }
        if (i == 18){
            return([2,0,6])
        }
        if (i == 19){
            return([2,0,7])
        }
        if (i == 20){
            return([2,0,8])
        }
        if (i == 21){
            return([2,1,6])
        }
        if (i == 22){
            return([2,1,7])
        }
        if (i == 23){
            return([2,1,8])
        }
        if (i == 24){
            return([2,2,6])
        }
        if (i == 25){
            return([2,2,7])
        }
        if (i == 26){
            return([2,2,8])
        }
        if (i == 27){
            return([3,3,0])
        }
        if (i == 28){
            return([3,3,1])
        }
        if (i == 29){
            return([3,3,2])
        }
        if (i == 30){
            return([3,4,0])
        }
        if (i == 31){
            return([3,4,1])
        }
        if (i == 32){
            return([3,4,2])
        }
        if (i == 33){
            return([3,5,0])
        }
        if (i == 34){
            return([3,5,1])
        }
        if (i == 35){
            return([3,5,2])
        }
        if (i == 36){
            return([4,3,3])
        }
        if (i == 37){
            return([4,3,4])
        }
        if (i == 38){
            return([4,3,5])
        }
        if (i == 39){
            return([4,4,3])
        }
        if (i == 40){
            return([4,4,4])
        }
        if (i == 41){
            return([4,4,5])
        }
        if (i == 42){
            return([4,5,3])
        }
        if (i == 43){
            return([4,5,4])
        }
        if (i == 44){
            return([4,5,5])
        }
        if (i == 45){
            return([5,3,6])
        }
        if (i == 46){
            return([5,3,7])
        }
        if (i == 47){
            return([5,3,8])
        }
        if (i == 48){
            return([5,4,6])
        }
        if (i == 49){
            return([5,4,7])
        }
        if (i == 50){
            return([5,4,8])
        }
        if (i == 51){
            return([5,5,6])
        }
        if (i == 52){
            return([5,5,7])
        }
        if (i == 53){
            return([5,5,8])
        }
        if (i == 54){
            return([6,6,0])
        }
        if (i == 55){
            return([6,6,1])
        }
        if (i == 56){
            return([6,6,2])
        }
        if (i == 57){
            return([6,7,0])
        }
        if (i == 58){
            return([6,7,1])
        }
        if (i == 59){
            return([6,7,2])
        }
        if (i == 60){
            return([6,8,0])
        }
        if (i == 61){
            return([6,8,1])
        }
        if (i == 62){
            return([6,8,2])
        }
        if (i == 63){
            return([7,6,3])
        }
        if (i == 64){
            return([7,6,4])
        }
        if (i == 65){
            return([7,6,5])
        }
        if (i == 66){
            return([7,7,3])
        }
        if (i == 67){
            return([7,7,4])
        }
        if (i == 68){
            return([7,7,5])
        }
        if (i == 69){
            return([7,8,3])
        }
        if (i == 70){
            return([7,8,4])
        }
        if (i == 71){
            return([7,8,5])
        }
        if (i == 72){
            return([8,6,6])
        }
        if (i == 73){
            return([8,6,7])
        }
        if (i == 74){
            return([8,6,8])
        }
        if (i == 75){
            return([8,7,6])
        }
        if (i == 76){
            return([8,7,7])
        }
        if (i == 77){
            return([8,7,8])
        }
        if (i == 78){
            return([8,8,6])
        }
        if (i == 79){
            return([8,8,7])
        }
        if (i == 80){
            return([8,8,8])
        }
    }
    
