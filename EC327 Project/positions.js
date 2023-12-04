// Creating boundaries for the fish :)
// Having boundaries is important, for fish I mean
const menu_boundaries = {
    leftx: 0,
    rightx: 1400,
    topy: 10,
    bottomy: 690
}

const fishing_boundaries = {
    leftx: 0,
    rightx: 1400,
    topy: 250,
    bottomy: 700
}

// Creating the starting position of every object!
// Fish:

// Menu
const fish_menu_pos = {
    x: 100,
    y: 100,
    width: 100,
    height: 50,
    sWidth: 96,
    sHeight: 48,
    frames: 5,
    speed: 4
}

const fish2_menu_pos = {
    x: 600,
    y: 600,
    width: 200,
    height: 120,
    sWidth: 800,
    sHeight: 480,
    frames: 20,
    speed: 3
}

const fish3_menu_pos = {
    x: 300,
    y: 400,
    width: 100,
    height: 150,
    sWidth: 1056,
    sHeight: 1584,
    frames: 6,
    speed: 3,
}

// Fishing
const fish_fishing_pos = {
    x: 200,
    y: 600,
    width: 100,
    height: 100,
    sWidth: 96,
    sHeight: 48,
    frames: 5,
    speed: 4
}

// Fish images
const fish_green_img = 'sprites/fish/Basic_Green_Swim-Sheet.png';
const fish_orange_img = 'sprites/fish/Basic_Orange_Swim-Sheet.png';
const fish_blue_img = 'sprites/fish/Basic_Blue_Swim-Sheet.png';
const fish_bitey_img = "sprites/fish/Detailed_3-YellowPurplePirahna_Swim-Sheet.png";
const fish_oar_img = "sprites/fish/Crazy_1_Swim-Sheet.png";
const fish_seahorse_img = "sprites/fish/seahorse.png";

// Timers: 

// Bubble Game
const timer_bubble_pos = {
    x: 50,
    y: 50,
    width: 200,
    height: 100,
    sWidth: 640,
    sHeight: 320
}

const timer_mine_pos = {
    x: 450,
    y: 600,
    width: 200,
    height: 100,
    sWidth: 640,
    sHeight: 320
}

// Buttons:

// Login
const button_login_to_menu_pos = {
    x: 400,
    y: 400,
    width: 600,
    height: 300,
    sWidth: 640,
    sHeight: 320
}

const button_username_pos = {
    x: 450,
    y: 150,
    width: 500,
    height: 250,
    sWidth: 640,
    sHeight: 320
}

// Menu

const button_menu_to_fishing_pos = {
    x: 450,
    y: 120,
    width: 500,
    height: 250,
    sWidth: 640,
    sHeight: 320
}

const button_menu_to_aquarium_pos = {
    x: 20,
    y: 100,
    width: 500,
    height: 250,
    sWidth: 640,
    sHeight: 320
}

const button_menu_to_save_pos = {
    x: 965,
    y: 270,
    width: 320,
    height: 160,
    sWidth: 640,
    sHeight: 320
}

// Compendium
const button_comp_to_menu_pos = {
    x: 600,
    y: 400,
    width: 200,
    height: 100,
    sWidth: 640,
    sHeight: 320
}

// Fishing
const button_fishing_to_menu_pos = {
    x: 40,
    y: 110,
    width: 300,
    height: 150,
    sWidth: 640,
    sHeight: 320
}

const button_fishing_to_fish_pos = {
    x: 480,
    y: 110,
    width: 300,
    height: 150,
    sWidth: 640,
    sHeight: 320
}

const button_menu_to_game_pos = {
    x: 1000,
    y: 300,
    width: 200,
    height: 100,
    sWidth: 640,
    sHeight: 320
}

// Caught
const button_caught_to_aquarium_pos = {
    x: 50,
    y: 50,
    width: 300,
    height: 150,
    sWidth: 640,
    sHeight: 320
}

const button_name_fish_pos = {
    x: 700,
    y: 50,
    width: 500,
    height: 250,
    sWidth: 640,
    sHeight: 320
}

// Aquarium
const button_aquarium_to_menu_pos = {
    x: 50,
    y: 50,
    width: 200,
    height: 100,
    sWidth: 640,
    sHeight: 320
}

// Mini Game Rules
const button_to_minigame_pos = {
    x: 550,
    y: 557,
    width: 250,
    height: 125,
    sWidth: 640,
    sHeight: 320
}

// Show Score
const button_score_to_caught_pos = {
    x: 450,
    y: 400,
    width: 500,
    height: 250,
    sWidth: 640,
    sHeight: 320
}

// Button images
const button_menu_img = 'sprites/Menu_Sign.png';
const button_fishing_img = 'sprites/Fishin_Sign.png';
const button_fishing_activation_img = 'sprites/fishing_activation.png';
const button_aquarium_img = 'sprites/Tank_Sign.png';
const button_username_img = 'sprites/username_button.png';
const button_login_img = 'sprites/Login_Button.png';
const button_save_img = 'sprites/The_Save_button.png';
const button_go_img = 'sprites/go_button.png';

// Backgrounds

const menu_background_pos = {
    x: 0,
    y: 0,
    width: 1400,
    height: 700,
    sWidth: 4800,
    sHeight: 2700
}
const minefield_seaweed_pos = {
    x: 0,
    y: 400,
    width: 100,
    height: 400,
    sWidth: 2000,
    sHeight: 2000,
    frames: 5,
}

const fishing_background_pos = {
    x: 0,
    y: 0,
    width: 1400,
    height: 700,
    sWidth: 480,
    sHeight: 270,
    frames: 277,
    speed: 2
}

// Background images
const water_background_img = "sprites/water.png";
const fishing_background_imgs = {"normal": "sprites/backgrounds/Fishin_Screen_Normal_day-Sheet.png",
                                "sunset": "sprites/backgrounds/Fishin_Screen_Normal_sunset-Sheet.png",
                                "rainy": "sprites/backgrounds/Fishin_Screen_Rain-Sheet.png",
                                "stormy": "sprites/backgrounds/Fishin_Screen_Storm-Sheet.png",};
let weather_types = ["normal", "sunset", "rainy", "stormy"];
const wooden_w_windows_background_img = "sprites/backgrounds/Wooden_Background_NEW.png";
const wooden_background_img = "sprites/backgrounds/Wooden_Background.png";
const generic_background_img = "sprites/backgrounds/Fish_Game_Screen.png";

// Login Items
const button_login_to_menu = new Button(button_login_to_menu_pos, button_login_img, 1);
const button_username = new TextButton(button_username_pos, button_username_img, "username"); // Resulting State is redundant
const login_background = new Background(menu_background_pos, wooden_background_img);

// Menu Items
const button_menu_to_aquarium = new Button(button_menu_to_aquarium_pos, button_aquarium_img, 4);
const button_menu_to_save = new SaveButton(button_menu_to_save_pos, button_save_img, 0);
const button_menu_to_fishin = new Button(button_menu_to_fishing_pos, button_fishing_img, 2);
const menu_background = new Background(menu_background_pos, wooden_w_windows_background_img);

// Fishing Items
const fishy_menu = new Fish(fish_menu_pos, fish_green_img, fishing_boundaries);
const fishy2_fishing = new Fish(fish2_menu_pos, fish_oar_img, fishing_boundaries, true, "Jerry");
const fishy3_fishing = new Fish(fish3_menu_pos, fish_seahorse_img, fishing_boundaries, true, "Cole")
const button_fishing_to_game = new Button(button_fishing_to_fish_pos, button_fishing_img, 5)
const button_fishing_to_menu = new Button(button_fishing_to_menu_pos, button_menu_img, 1);
const fishing_background_day = new Background(fishing_background_pos, fishing_background_imgs["normal"]);
const fishing_background_sunset = new Background(fishing_background_pos, fishing_background_imgs["sunset"]);
const fishing_background_rainy = new Background(fishing_background_pos, fishing_background_imgs["rainy"]);
const fishing_background_stormy = new Background(fishing_background_pos, fishing_background_imgs["stormy"]);
const fishing_background = {"normal": fishing_background_day, 
                            "sunset": fishing_background_sunset, 
                            "rainy" : fishing_background_rainy, 
                            "stormy" : fishing_background_stormy};

// Compendium Items
const button_comp_to_menu = new Button(button_comp_to_menu_pos, button_menu_img, 1);

// Caught Fish Items
const button_caught_to_aquarium = new Button(button_caught_to_aquarium_pos, button_aquarium_img, 4);
const button_name_fish = new TextButton(button_name_fish_pos, button_username_img, "fishname");

// Aquarium Items
const button_aquarium_to_menu = new Button(button_aquarium_to_menu_pos, button_menu_img, 1);
const aquarium_treasure_chest = new Background({x: 100, y: 500, width: 200, height: 200, sWidth: 320, sHeight: 320}, "sprites/Treasure_Chest.png")

// Mini Game Rules Items
const button_to_minigame = new Button(button_to_minigame_pos, button_go_img, 6); // Resulting state changes
const rules_background = new Background({x: 100, y: 0, width: 1200, height: 600, sWidth: 640, sHeight: 320}, "sprites/username_button.png")

// Show Score
const button_score_to_caught = new Button(button_score_to_caught_pos, button_go_img, 3);

// Bubble Mini Game Items
const timer_bubble = new Timer(timer_bubble_pos, 15, "transitioning");
const generic_background = new Background(menu_background_pos, generic_background_img);

// Minefield Mini Game Items
const boom_boy = new GameObj({x: 0, y: 0, width: 500, height: 500, sWidth: 640, sHeight: 640, frames: 8, speed: 5}, "sprites/BOOM-Sheet.png");
const timer_after_mine = new Timer(timer_bubble_pos, 4, "transitioning", false);
const timer_mine = new Timer(timer_mine_pos, 15, "transitioning");
let minefield_seaweed = [];
let height_diff = 0;
for (let i = 0; i < 12; i++)
{
    height_diff = Math.floor(Math.random()*100);
    minefield_seaweed.push(new Background({x: Math.floor(Math.random()*1400) - 500,
        y: 100 - height_diff,
        width: 600 + height_diff,
        height: 600 + height_diff,
        sWidth: 2000,
        sHeight: 2000,
        frames: 5,
        speed: 6},
        "sprites/seaweed.png"));
    minefield_seaweed[i].frame = Math.floor(Math.random()*5);
}

// Initializing the arrays that will hold all buttons/fish
let activeButtons = [];
let activeFish = [];
let activeBackgrounds = [];
let activeGameObjs = [];
let activeTimers = [];

let currentState = 0;
let previousState = 0;

// Holds the information for any given state
let states = {
    0: { // Login Screen
        fish: [],
        buttons: [button_login_to_menu, button_username],
        backgrounds: [login_background],
        gameobjs: [],
        timers: [],
    },
    1: { // Menu
        fish: [],
        buttons: [button_menu_to_aquarium, button_menu_to_save, button_menu_to_fishin],
        backgrounds: [menu_background],
        gameobjs: [],
        timers: [],
    },
    2: { // Fishing Prep
        fish: [fishy_menu, fishy2_fishing, fishy3_fishing],
        buttons: [button_fishing_to_game, button_fishing_to_menu],
        backgrounds: [], // Pushed in main
        gameobjs: [],
        timers: [],
    },
    3: { // Caught fish!
        fish: [], // Fish will be added in the loadState func
        buttons: [button_caught_to_aquarium, button_name_fish],
        backgrounds: [generic_background],
        gameobjs: [],
        timers: [],
    },
    4: { // Aquarium
        fish: [], // Fish will be added in the loadState func
        buttons: [button_aquarium_to_menu],
        backgrounds: [generic_background, aquarium_treasure_chest],
        gameobjs: [],
        timers: [],
    },
    5: { // Rule Screen For Mini Game
        fish: [],
        buttons: [button_to_minigame],
        backgrounds: [login_background, rules_background], // Rule background
        gameobjs: [],
        timers: [],
    },
    6: { // Show Score!
        fish: [],
        buttons: [button_score_to_caught],
        backgrounds: [login_background],
        gameobjs: [],
        timers: [],
    },
    7: { // Bubble Mini Game!
        fish: [],
        buttons: [],
        backgrounds: [generic_background],
        gameobjs: [],
        timers: [timer_bubble],
    },
    8: { // Minefield!
        fish: [],
        buttons: [],
        backgrounds: [generic_background, minefield_seaweed[0], minefield_seaweed[1], minefield_seaweed[2], minefield_seaweed[3], minefield_seaweed[4], minefield_seaweed[5], 
                        minefield_seaweed[6], minefield_seaweed[7], minefield_seaweed[8], minefield_seaweed[9], minefield_seaweed[10], minefield_seaweed[11]],
        gameobjs: [],
        timers: [timer_mine, timer_after_mine],
    }
}

// Text for the rules!
 let rules = {
     7: new Background({x: 200, y: -10, width: 1000, height: 600, sWidth: 960, sHeight: 300}, "sprites/Bubble Game Instructions.png"),
     8: new Background({x: 200, y: -65, width: 1000, height: 600, sWidth: 960, sHeight: 300}, "sprites/Mine Game Instructions.png"),
 }

const minefield_objs = [
    {
        type: "obstacle",
        pic: "sprites/mine.png",
        width: 80,
        height: 80,
        sWidth: 320,
        sHeight: 320
    },
    {
        type: "collectable",
        pic: "sprites/Starfish.png",
        width: 60,
        height: 60,
        sWidth: 320,
        sHeight: 320
    }
]