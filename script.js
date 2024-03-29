
//DECLARATIONS
//DECLARATIONS
//DECLARATIONS

const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
let squares = [];
let score = 0;



//BOARD BUILDING
//BOARD BUILDING
//BOARD BUILDING

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,4,1,1,4,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,4,4,4,1,2,2,2,2,2,2,1,4,4,4,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);

        if (layout[i] === 0) {
            square.classList.add('pac-dot')
        } else if (layout[i] === 1) {
            square.classList.add('wall')
        } else if (layout[i] === 2) {
            square.classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            square.classList.add('power-pellet')
        } 
    }
};

createBoard();


//CHARACTER CREATION AND CONTROL
//CHARACTER CREATION AND CONTROL
//CHARACTER CREATION AND CONTROL

let pacmanCurrentIndex = 490;


//PAC-LAD

squares[pacmanCurrentIndex].classList.add('pac-man');

//CONTROLS

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man');
    switch(e.keyCode) {
        case 40:
            console.log('pressed down')
            if (!squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
            pacmanCurrentIndex + width < width * width) 
            pacmanCurrentIndex += width;
            break;
        case 39:
            console.log('pressed right')
            if (!squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
            pacmanCurrentIndex % width < width - 1) pacmanCurrentIndex += 1;
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex =364;
            }
            break;
        case 38:
            console.log('pressed up')
            if (!squares[pacmanCurrentIndex - width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
            pacmanCurrentIndex - width >= 0) pacmanCurrentIndex -= width;
            break;
        case 37:
            console.log('pressed left')
            if (!squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
            pacmanCurrentIndex % width !== 0) pacmanCurrentIndex -= 1;
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex =391;
            }
            break;
    }
    squares[pacmanCurrentIndex].classList.add('pac-man');
    pacDotEaten();
    powerPelletEaten();
    checkForWin();
    checkForGameOver();
}

document.addEventListener('keyup', control);

//EATING DOTS

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
        score++;
        scoreDisplay.innerHTML = score;
    }
};

//GHOSTS

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
});

ghosts.forEach(ghost => moveGhost(ghost));

//GHOST MOVEMENT

function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width];
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {

        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
            ) {
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost')
                squares[ghost.currentIndex].classList.remove('scared-ghost')

                ghost.currentIndex += direction

                squares[ghost.currentIndex].classList.add(ghost.className)
                squares[ghost.currentIndex].classList.add('ghost')


            } else direction = directions[Math.floor(Math.random() * directions.length)]

            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }

            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                score += 100;
                ghost.currentIndex = ghost.startIndex;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
        checkForGameOver();
    }, ghost.speed)
};


//EATING POWER PELLETS

function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score += 10;
        squares[pacmanCurrentIndex].classList.remove('power-pellet');
        ghosts.forEach(ghost => ghost.isScared = true);
        setTimeout(unScareGhosts, 10000);
    }
}

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false);
}


//GAME OVER

function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', control);
            scoreDisplay.innerHTML = score + ' GAME OVER'
        }
}


//CHECK FOR WIN

function checkForWin() {
    if (score === 274) {
        ghost.forEach(ghost => clearInterval(ghost.timerId));
        document.removeEventListener('keyup', control);
        scoreDisplay.innerHTML = score + ' YOU WIN';
    }
}




