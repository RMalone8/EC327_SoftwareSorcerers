/** @type {HTMLCanvasElement} */

// Initializing canvas and context variables, as well as other game variables
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
CANVAS_WIDTH = canvas.width = 1400;
CANVAS_HEIGHT = canvas.height = 700;
let loading_game = true;
let overlay = 0;
let swapping = false;
let entering_word = false;
let player_name = "";
let typed_word = "";
let player_fish = [];
let player_fish_JSON = [];
let newFish;
let addingFish = true;

// Initializing some game variables
let num_mini_games = 2;
let mini_game = 0;
let mini_game_score = 0;
let map;
let weather = "normal";
let weather_probabilities;
let samples = 1;

//let menu_audio = new Audio("music/MainMenuMusic.m4a");
//let minigame_audio = new Audio("music/MiniGameMusic.m4a");
//playMusic(menu_audio);

// Initializing the mouse position variables
let XPOS;
let YPOS;
let CLICK_XPOS;
let CLICK_YPOS;

// Getting the mouse position
window.addEventListener('mousemove', function(e){
    XPOS = e.offsetX;
    YPOS = e.offsetY;
    //CLICK_XPOS = 0;
    //CLICK_YPOS = 0;
});

// Getting the mouse position when clicking
window.addEventListener('click', function(e){
    CLICK_XPOS = e.offsetX;
    CLICK_YPOS = e.offsetY;
    entering_word = false;
});

window.addEventListener('keydown', function(e){ // Retrieve and store the typed letters
    if (e.key.toUpperCase() != e.key.toLowerCase() && e.key.length == 1 && entering_word)
        typed_word += e.key;
    if ((e.key == 'Backspace' || e.key == 'Delete') && typed_word != "" && entering_word)
        typed_word = typed_word.slice(0, typed_word.length - 1);
});

// Loading a given state function
function loadState(state)
{
    // Reset all active object arrays
    activeFish = [];
    activeButtons = [];
    activeBackgrounds = [];
    activeGameObjs = [];
    activeTimers = [];

    // Load the player's progress!
    if (loading_game && state == 1)
    {
        loading_game = false;
        player_name = button_username.getWord(); // Get the player's username
        if (localStorage.getItem(player_name) != null)
        {
            player_fish_JSON = localStorage.getItem(player_name);
            player_fish_JSON = JSON.parse(player_fish_JSON);
            player_fish_JSON = player_fish_JSON
            player_fish_JSON.forEach(fish => { // Load all of the player's fish data
                if (fish.type == "normal")
                {
                    player_fish.push(new Fish({
                        x: fish.x,
                        y: fish.y,
                        width: fish.width,
                        height: fish.height,
                        sWidth: fish.sWidth,
                        sHeight: fish.sHeight,
                        frames: fish.frames,
                        speed: fish.speed
                    }, fish.pic, menu_boundaries, true, fish.name));
                } else if (fish.type == "ground")
                {
                    player_fish.push(new GroundFish({
                        x: fish.x,
                        y: fish.y,
                        width: fish.width,
                        height: fish.height,
                        sWidth: fish.sWidth,
                        sHeight: fish.sHeight,
                        frames: fish.frames,
                        speed: fish.speed
                    }, fish.pic, menu_boundaries, true, fish.name));
                }
                });
        }

    }

    typed_word = ""; // Reset the typed word


    // Load all of the objects and backgrounds for the given state
    states[state].fish.forEach(fish => {
        fish.randomizePos();
        activeFish.push(fish);
    });
    states[state].buttons.forEach(button => {
        activeButtons.push(button);
    });
    states[state].backgrounds.forEach(bg => {
        activeBackgrounds.push(bg);
    });
    states[state].gameobjs.forEach(obj => {
        activeGameObjs.push(obj);
    });
    states[state].timers.forEach(timer => {
        timer.started = false;
        activeTimers.push(timer);
    })

    if (state == 2) // Entering the fishing state, setting the weather
    {
        weather = weather_types[Math.floor(Math.random()*weather_types.length)];
        activeBackgrounds.push(fishing_background[weather]);
    }

    if (state == 3) // Did we just catch a fish?
    {
        weather_probabilities = weatherProbabilities(weather);
        samples = analyzeScore(mini_game_score, mini_game);
        mini_game_score = 0;
        newFish = generateCatch(weather_probabilities, samples);
        activeFish.push(newFish);
        player_fish.forEach(fish => {
            if (fish.pic == newFish.pic)
                addingFish = false;
        });
        if (addingFish) // Is this a brand new fish?
        {
            player_fish.push(newFish);
        }
    }
    else if (state == 4) // Load the player's fish into the aquarium
    {   
        if (previousState == 3 && addingFish) // Did we just come from catching a fish?
        {
            player_fish[player_fish.length - 1].setName(button_name_fish.getWord()); // Name fish
        }
        button_name_fish.resetWord();
        addingFish = true;
        player_fish.forEach(fish => {
            fish.setActive();
            fish.randomizePos();
            activeFish.push(fish);
        });
    }
    else if (state == 5) // Showing the rules of the new mini game
    {
        mini_game = Math.floor(Math.random()*num_mini_games) + 7;
        activeButtons[0].resultingState = mini_game;
        activeBackgrounds.push(rules[mini_game]);
    }
    else if (state == 6) // Interpret score
    {
        activeTimers.push(showScoreObj(mini_game_score));
    }
    else if (state == 7) // Set up bubble mini game
    {
        activeGameObjs = generateBubbles(200, "float", "clickable");
        activeTimers[0].begin();
    }
    else if (state == 8) // Set up minefield mini game
    {
        map = randMineArray();
        activeGameObjs = LoadArrayForScreen(map, minefield_objs);
        activeTimers[0].begin();
    }
}

// Load first state!
loadState(currentState);

function animate()
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear the canvas
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Draw a blue background


    // Draw the background
    activeBackgrounds.forEach(bg => {
        bg.update();
        bg.draw();
    })

    // Draw the game objects
    activeGameObjs.forEach((obj, i) => {
        obj.check_for_activity(XPOS, YPOS, CLICK_XPOS, CLICK_YPOS);
        obj.update();
        obj.draw();
        if (obj.clicked && obj.type == "clickable") // Did we click on a clickable object
        {
            delete activeGameObjs[i];
            CLICK_XPOS = 1400;
            CLICK_YPOS = 800;
            mini_game_score++;
        }
        if (obj.hovered && obj.type == "collectable") // Did we hover over a collectable
        {
            delete activeGameObjs[i];
            CLICK_XPOS = 1400;
            CLICK_YPOS = 800;
            mini_game_score++;
        }
        if (obj.hovered && obj.type == "obstacle") // Did we hit an obstacle
        {   
            activeTimers.forEach(timer => {
                if (!timer.visible && !timer.finished && !timer.started)
                {
                    activeGameObjs.forEach((obj2, j) => {
                        obj2.mode = "still";
                        if (obj2.type == "collectable")
                        {
                            delete activeGameObjs[j];
                        }
                    });
                    timer.begin();
                    boom_boy.x = obj.x - boom_boy.width/2;
                    boom_boy.y = obj.y - boom_boy.height/2;
                    activeGameObjs.push(boom_boy);
                    timer.started = true;
                    activeTimers[0].started = false;
                }
            });
        }
    });

    // Draw any of the fish
    activeFish.forEach(fish => {
        fish.check_for_activity(XPOS, YPOS);
        fish.update();
        fish.draw();
    });

    // Draw any of the buttons
    activeButtons.forEach(button => {
        button.check_for_activity(XPOS, YPOS, CLICK_XPOS, CLICK_YPOS);
        button.update();
        button.draw();
        if (button.clicked && button.constructor.name == 'Button' && !swapping) // Are we going to a new state?
        {
            swapping = true;
            previousState = currentState;
            currentState = button.resultingState;
        }
        else if (button.clicked && button.constructor.name == 'TextButton') // Are we about to type on a text button?
        {
            entering_word = true;
            button.word = typed_word;
        }
        else if (button.clicked && button.constructor.name == 'SaveButton') // Saving game!
        {
            player_fish_JSON = JSON.stringify(player_fish);
            localStorage.setItem(player_name, player_fish_JSON);
            CLICK_XPOS = 1400;
            CLICK_YPOS = 800;
        }
    });

    // Draw timers!
    activeTimers.forEach(timer => {
        timer.update();
        timer.draw();

        if (timer.type == "transitioning" && timer.started && timer.finished)
        {
            timer.reset();
            swapping = true;
            previousState = currentState;
            currentState = 6;
        }
    });

    // Fade out background if changing states!
    ctx.save();
    ctx.globalAlpha = overlay;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.restore();

    // Little bit of code for fading and changing states
    if (swapping)
        overlay += 0.05;
    if (overlay > 1.5)
    {
        overlay = 0;
        swapping = false;

        loadState(currentState);

        CLICK_XPOS = 1400;
        CLICK_YPOS = 800;
    }

    // Animate the frame!
    requestAnimationFrame(animate);
}
animate();