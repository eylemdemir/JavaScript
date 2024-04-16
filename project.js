const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


function drawMaze(maze, player, goal, holes, boxes) {
    console.clear();
    for (let i = 0; i < maze.length; i++) {
        let row = '';
        for (let j = 0; j < maze[i].length; j++) {
            let char = maze[i][j];
            if (player.x === j && player.y === i) {
                row += '\x1b[33mX\x1b[0m';
            } else if (goal.x === j && goal.y === i) {
                row += '\x1b[35m!\x1b[0m';
            } else if (holes.some(hole => hole.x === j && hole.y === i)) {
                row += '\x1b[31mH\x1b[0m';
            } else if (boxes.some(box => box.x === j && box.y === i)) {
                row += '\x1b[32m@\x1b[0m';
            } else {
                row += char;
            }
        }
        console.log(row);
    }
}


function movePlayer(player, direction, maze, boxes, holes) {
    const nxtPosition = {x: player.x, y: player.y};
    switch (direction) {
        case 'a':
            nxtPosition.x--; // left
            break;
        case 'd':
            nxtPosition.x++; // right
            break;
        case 'w':
            nxtPosition.y--; // up
            break;
        case 's':
            nxtPosition.y++; // down
            break;
        default:
            break;
    }
    return nxtPosition;
}


async function startGame() {
    const maze = [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', ' ', '.', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '@', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '#', '#', ' ', '#', ' ', '#', ' ', '#', '!', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
    ];

    const player = {x: 1, y: 1};
    const goal = {x: 10, y: 4};
    const holes = [{x: 2, y: 2}, {x: 6, y: 6}, {x: 7, y: 7}];
    const boxes = [{x: 5, y: 2}, {x: 8, y: 8}];

    drawMaze(maze, player, goal, holes, boxes);

    while (true) {
        const direction = await prompt('Choose Direction [a-s-d-w] / x: Exit / f:fire: ');

        if (direction === 'x') {
            console.log('Game Over');
            break;
        }

        const nxtPosition = movePlayer(player, direction, maze, boxes, holes);

        const isBlocked = maze[nxtPosition.y][nxtPosition.x] === '#' ||
            holes.some(hole => hole.x === nxtPosition.x && hole.y === nxtPosition.y) ||
            boxes.some(box => box.x === nxtPosition.x && box.y === nxtPosition.y);

        if (!isBlocked) {
            player.x = nxtPosition.x;
            player.y = nxtPosition.y;
        }

        drawMaze(maze, player, goal, holes, boxes);

        if (player.x === goal.x && player.y === goal.y) {
            console.log('-- You Won ! --');
            break;
        }
    }
    rl.close();
}

startGame().catch((err) => {
    console.error(err);
});
