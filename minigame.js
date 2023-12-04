function generateBubbles(num, movement, bubble_type) // Generating all of the bubbles with a chosen movement type
{
    let bubbles = [];
    let bound = num
    let bub_size;
    for (let i = 0; i < bound; i++)
    {
        bub_size = Math.floor(Math.random()*100) + 35;
        bubbles.push(new GameObj({
            x: Math.floor(Math.random()*1400),
            y: Math.floor(Math.random()*700),
            width: bub_size,
            height: bub_size,
            sWidth: 640,
            sHeight: 640},
            'sprites/Bubble_img.png',
            movement,
            bubble_type));
    }
    return bubbles;
}

function randMineArray()
{
    //screen size
    let rows=7;
    let col=14;

    //change for how many stars (represented by a 2) and mines (represented by a 1)
    let starnum=10;
    let minenum=70;
    
    //Make 2D array of zeros
    let minestararr=Array.from({length:rows}, () => Array(col).fill(0));
    let randomrow;
    let randomcol;
    //Place the stars
    for(let i=0;i<minenum;i++)
    {
        do{
            randomrow=Math.floor(Math.random()*rows);
            randomcol=Math.floor(Math.random()*col);
        } while(minestararr[randomrow][randomcol] !=0)
        minestararr[randomrow][randomcol] = 1; // Obstacles are 1

    }
    //Place the mines
    for(let i=0;i<starnum;i++)
    {
        do{
            randomrow=Math.floor(Math.random()*rows);
            randomcol=Math.floor(Math.random()*col);
        } while(minestararr[randomrow][randomcol] != 0 && minestararr[randomrow][randomcol] != 2)
        minestararr[randomrow][randomcol] = 2; // Collectables are 2

    }
    minestararr[6][4] = 0;
    minestararr[6][5] = 0;
    minestararr[6][6] = 0;
    minestararr[6][7] = 0;
    return minestararr;
}

function LoadArrayForScreen(map, ...objs)
{
    let gameObjs = [];
    let collectables = [];
    let obstacles = [];
    let choice = 0;
    // Obstacles are 1, Collectables are 2
    objs[0].forEach(obj => {
        if (obj.type == "collectable")
        {
            collectables.push(obj);
        }
        else if (obj.type == "obstacle")
        {
            obstacles.push(obj);
        }
    });
    for (let i = 0; i < map.length; i++)
    {
        for (let j = 0; j < map[0].length; j++)
        {
            if (map[i][j] == 1) // Load all of the objects
            {
                choice = Math.floor(Math.random()*obstacles.length);
                gameObjs.push(new GameObj({x: j*100 + Math.floor(Math.random()*20) - 9.5,
                                            y: i*100 + Math.floor(Math.random()*20) - 9.5,
                                            width: obstacles[choice].width,
                                            height: obstacles[choice].height,
                                            sWidth: obstacles[choice].sWidth,
                                            sHeight: obstacles[choice].sHeight},
                                            obstacles[choice].pic,
                                            "float",
                                            "obstacle"
                                            ));
            }
            else if (map[i][j] == 2) // Load all of the collectables
            {
                choice = Math.floor(Math.random()*collectables.length);
                gameObjs.push(new GameObj({x: j*100,
                                            y: i*100, 
                                            width: collectables[choice].width,
                                            height: collectables[choice].height,
                                            sWidth: collectables[choice].sWidth,
                                            sHeight: collectables[choice].sHeight},
                                            collectables[choice].pic,
                                            "still",
                                            "collectable"
                                            ));
            }
        }
    }
    return gameObjs;
}

function showScoreObj(score) // Send back an object to display with the score
{
    let scoreTimer = new Timer({x: 450,
                        y: 100,
                        width: 500,
                        height: 250,
                        sWidth: 640,
                        sHeight: 320},
                        0,
                        "score",
                        true);
    scoreTimer.timeRemaining = "Your score: " + score;
    return scoreTimer;
}

function analyzeScore(score, minigame) // Returns the number of samples to take of probability matrix
{
    if (minigame == 7) // Bubble game
    {
        if (score > 30)
            return 5;
        else if (score > 15)
            return 3;
        else
            return 1;
    }
    else if (minigame == 8) // Minefield game
    {
        if (score > 7)
            return 5;
        else if (score > 3)
            return 3;
        else
            return 1;
    }
}
