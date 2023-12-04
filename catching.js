function generateCatch(probabilities, samples)
{   
    // Getting a number of samples from the probability array
    let choices = [];
    for (let i = 0; i < samples; i++)
        choices.push(probabilities[Math.floor(Math.random()*probabilities.length)]);

    // Seeing if any rare or uncommon fish were sampled, if so, generate a fish of the highest rarity present
    let rare_choices = choices.filter(checkUpperRange);
    let middle_choices = choices.filter(checkMiddleRange);
    if (rare_choices[0])
        fish_id = rare_choices[Math.floor(Math.random()*rare_choices.length)];
    else if (middle_choices[0])
        fish_id = middle_choices[Math.floor(Math.random()*middle_choices.length)];
    else
        fish_id = choices[Math.floor(Math.random()*choices.length)];

    let length = Math.sqrt(Math.pow(fish_types[fish_id].sWidth, 2) + Math.pow(fish_types[fish_id].sHeight, 2));
    let size_factor = Math.random()*100 + 100;

    // Randomly generate the size of the fish and store other important information
    let pos = {
        x: 600,
        y: 400,
        width: size_factor*(fish_types[fish_id].sWidth/length),
        height: size_factor*(fish_types[fish_id].sHeight/length),
        sWidth: fish_types[fish_id].sWidth,
        sHeight: fish_types[fish_id].sHeight,
        frames: fish_types[fish_id].frames,
        speed: fish_types[fish_id].speed
    }

    let img = fish_types[fish_id].img;

    let boundaries = menu_boundaries;

    let newFish;

    if (fish_id < 2)
        newFish = new GroundFish(pos, img, boundaries, false);
    else
        newFish = new Fish(pos, img, boundaries, false);

    return newFish;
}

fish_types = { // For rarity, higher number is the most common. An array for different weather
    0: {
        img: "sprites/fish/Crab_Walk-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 3,
        speed: 1,
        rarity: [4, 4, 4]
    },
    1: {
        img: "sprites/fish/Snail_Move-Sheet.png",
        sWidth: 160,
        sHeight: 160,
        frames: 4,
        speed: 5,
        rarity: [4, 4, 4]
    },
    2: {
        img: "sprites/fish/Basic_Green_Swim-Sheet.png",
        sWidth: 96,
        sHeight: 48,
        frames: 5,
        speed: 4,
        rarity: [4, 4, 4]
    },
    3: {
        img: "sprites/fish/Basic_Orange_Swim-Sheet.png",
        sWidth: 128,
        sHeight: 128,
        frames: 4,
        speed: 8,
        rarity: [4, 4, 4]
    },
    4: {
        img: "sprites/fish/Basic_Blue_Swim-Sheet.png",
        sWidth: 96,
        sHeight: 48,
        frames: 5,
        speed: 2,
        rarity: [4, 4, 4]
    },
    5: {
        img: "sprites/fish/yellowtang.png",
        sWidth: 1600,
        sHeight: 1600,
        frames: 4,
        speed: 4,
        rarity: [4, 4, 4]
    },
    6: {
        img: "sprites/fish/blacktang.png",
        sWidth: 1600,
        sHeight: 1600,
        frames: 4,
        speed: 4,
        rarity: [4, 4, 4]
    },
    7: {
        img: "sprites/fish/Detailed_2-bluegreenpuffer-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 32,
        speed: 2,
        rarity: [4, 4, 4]
    },
    8: {
        img: "ssprites/fish/Detailed_2-rainbowpuffer-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 32,
        speed: 2,
        rarity: [4, 4, 4]
    },
    9: {
        img: "sprites/fish/Detailed_2puffer-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 32,
        speed: 2,
        rarity: [4, 4, 4]
    },
    // Detailed
    10: {
        img: "sprites/fish/Detailed_3-YellowPurplePirahna_Swim-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 11,
        speed: 2,
        rarity: [3, 3, 3]
    },
    11: {
        img: "sprites/fish/Detailed_3-RedOrangePirahna_Swim-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 11,
        speed: 2,
        rarity: [3, 3, 3]
    },
    12: {
        img: "sprites/fish/redfirefish.png",
        sWidth: 1584,
        sHeight: 528,
        frames: 5,
        speed: 2,
        rarity: [3, 3, 3]
    },
    13: {
        img: "sprites/fish/purplefirefish.png",
        sWidth: 1584,
        sHeight: 528,
        frames: 5,
        speed: 2,
        rarity: [3, 3, 3]
    },
    14: {
        img: "sprites/fish/greenfirefish.png",
        sWidth: 1584,
        sHeight: 528,
        frames: 5,
        speed: 2,
        rarity: [3, 3, 3]
    },
    15: {
        img: "sprites/fish/Detailed_3-RainbowPirahna_Swim-Sheet.png",
        sWidth: 320,
        sHeight: 320,
        frames: 11,
        speed: 2,
        rarity: [3, 3, 3]
    },
    // Rare!
    16: {
        img: "sprites/fish/Crazy_1_Swim-Sheet.png",
        sWidth: 800,
        sHeight: 480,
        frames: 20,
        speed: 3,
        rarity: [2, 2, 2]
    },
    17: {
        img: "sprites/fish/seahorse.png",
        sWidth: 1056,
        sHeight: 1584,
        frames: 6,
        speed: 3,
        rarity: [2, 2, 2]
    },
    18: {
        img: "sprites/fish/Crazy_Desgin_4-stormyLighting-Shark-Sheet.png",
        sWidth: 960,
        sHeight: 800,
        frames: 6,
        speed: 2,
        rarity: [2, 3, 4]
    },
    19: {
        img: "sprites/fish/Crazy_Desgin_4-stormyShark-Sheet.png",
        sWidth: 331,
        sHeight: 276,
        frames: 6,
        speed: 3,
        rarity: [2, 3, 4]
    },
    20: {
        img: "sprites/fish/Crazy_Design_3-RainySailfish-Sheet.png",
        sWidth: 800,
        sHeight: 640,
        frames: 6,
        speed: 4,
        rarity: [2, 4, 3]
    }
}

function weatherProbabilities(weather) // Returns an array full of the fish ids, with their frequency related to their probabilites
{
    let probabilities = [];
    let weather_rarity;
    if (weather == "normal" || weather == "sunset")
        weather_rarity = 0;
    else if (weather == "rainy")
        weather_rarity = 1;
    else
        weather_rarity = 2;

    for (key in fish_types)
        for (let i = 0; i < fish_types[key].rarity[weather_rarity]; i++)
            probabilities.push(parseInt(key));

    return probabilities;
}

function checkUpperRange(prob)
{
    return prob >= 16;
}

function checkMiddleRange(prob)
{
    return prob >= 10 && prob <= 15;
}
