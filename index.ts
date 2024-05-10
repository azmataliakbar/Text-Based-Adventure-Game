#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";


function rainbowText(text: any) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];

    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
    }

    const currentDateTime = new Date();
    const currentDate = currentDateTime.toLocaleDateString();
    const currentTime = currentDateTime.toLocaleTimeString();

    console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
    console.log();

    console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to the Adventure Game 🔵🟢🟠\n"));
    console.log(chalk.yellowBright.italic.bold("\n🟠🟢🔵  Welcome to Jungle of Africa 🔵🟢🟠\n"));

    // interface for a scene
    interface Scene {
        message: string;
        choices: Choice[];
    }
    
    // interface for a choice
    interface Choice {
        name: string;
        next: string;
    }
    
    // My game logic for the jungle adventure
    const story: { [key: string]: Scene } = {

        //  scenes...
        enterJungle: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI found myself in the heart of Africa's dense jungle during this visit. I thought, What should I do?\n"),
            choices: [
                { name: "Explore deeper into the jungle", next: "exploreJungle" },
                { name: "Set up camp for the night", next: "setCamp" }
            ]
        },
        exploreJungle: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nAs I entered deeper into the jungle, I encountered a group of wild animals. I thought, What should I do?\n"),
            choices: [

                { name: "Attempt to scare them away", next: "scareAnimals" },
                { name: "Quietly retreat", next: "quietRetreat" }
            ]
        },
        scareAnimals: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nMy attempt to scare the animals angered them, and they began to chase me. I thought, What should I do?\n"),
            choices: [
                { name: "Climb a tree to safety", next: "climbTree" },
                { name: "Run towards a nearby river", next: "runRiver" }
            ]
        },
        climbTree: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI managed to climb a tree, and the animals lost interest. What now?\n"),
            choices: [
                { name: "Stay in the tree until it's safe to come down", next: "stayTree" },
                { name: "Continue deeper into the jungle", next: "exploreDeeper" }
            ]
        },
        stayTree: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI stayed in the tree until it was safe to come down. ( Congratulations! The End. )\n"),
            choices: []
        },
        runRiver: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI ran towards the river, and the animals hesitated to follow me. I thought, What should I do?\n"),
            choices: [
                { name: "Cross the river", next: "crossRiver" },
                { name: "Follow the riverbank", next: "followRiverbank" }
            ]
        },
        crossRiver: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI crossed the river and found a safe spot on the other side. ( Congratulations! The End. )\n"),
            choices: []
        },
        followRiverbank: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI followed the riverbank and discovered a hidden path leading out of the jungle. ( Congratulations! The End. )\n"),
            choices: []
        },
        quietRetreat: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI quietly retreated, avoiding a confrontation with the animals. I thought, what should I do?\n"),
            choices: [
                { name: "Return to the camp", next: "returnCamp" },
                { name: "Explore a different path", next: "explorePath" }
            ]
        },
        returnCamp: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI returned to the camp and spent the night safely. ( Congratulations! The End. )\n"),
            choices: []
        },
        exploreDeeper: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI decided to continue deeper into the jungle, where many adventures awaited me.\n"),
            choices: [
                { name: "Encounter a pride of lions", next: "encounterLions" },
                { name: "Confront a pack of hyenas", next: "confrontHyenas" },
                { name: "Face off against a leopard", next: "faceLeopard" },
                { name: "Stumble upon a herd of elephants", next: "herdElephants" },
                { name: "Navigate past a crocodile-infested river", next: "navigateRiver" }
            ]
        },
        encounterLions: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI encountered a pride of lions. I thought, What should I do?\n"),
            choices: [
                { name: "Stand your ground and roar back", next: "standGround" },
                { name: "Slowly back away", next: "backAway" }
            ]
        },
        standGround: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI stood on ground and roared back, impressing the lions and safely passing through. ( Congratulations! The End. )\n"),
            choices: []
        },
        backAway: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI slowly backed away, avoiding provoking the lions. ( Congratulations! The End. )\n"),
            choices: []
        },
        confrontHyenas: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI confronted a pack of hyenas. I thought, What should I do?\n"),
            choices: [
                { name: "Show dominance by making loud noises", next: "showDominance" },
                { name: "Offer them food as a peace offering", next: "offerFood" }
            ]
        },
        showDominance: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI made loud noises, asserting dominance over the hyenas and safely passing through. ( Congratulations! The End. )\n"),
            choices: []
        },
        offerFood: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI offered the hyenas food as a peace offering, and they allowed me to pass. ( Congratulations! The End. )\n"),
            choices: []
        },
        faceLeopard: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI faced off against a leopard. I thought, What should I do?\n"),
            choices: [
                { name: "Make yourself appear larger and shout loudly", next: "makeLoud" },
                { name: "Slowly back away without making eye contact", next: "slowBack" }
            ]
        },
        makeLoud: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI made myself appear larger and shouted loudly, intimidating the leopard, and safely passed through. ( Congratulations! The End. )\n"),
            choices: []
        },
        slowBack: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI slowly backed away without making eye contact, avoiding a confrontation with the leopard. ( Congratulations! The End. )\n"),
            choices: []
        },
        herdElephants: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI stumbled upon a herd of elephants.I thought, What should I do?\n"),
            choices: [
                { name: "Observe them quietly from a distance", next: "observeQuietly" },
                { name: "Attempt to approach them for a closer look", next: "approachElephants" }
            ]
        },
        observeQuietly: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI observed the elephants quietly from a distance, appreciating their majesty. Congratulations! The End.\n"),
            choices: []
        },
        approachElephants: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI attempted to approach the elephants for a closer look, but they became agitated and charged. What now?\n"),
            choices: [
                { name: "Climb a nearby tree for safety", next: "climbTreeElephants" },
                { name: "Run towards an open space", next: "runOpenSpace" }
            ]
        },
        climbTreeElephants: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI climbed a nearby tree, and the elephants eventually lost interest and moved on. ( Congratulations! The End. )\n"),
            choices: []
        },
        runOpenSpace: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI ran towards an open space, narrowly escaping the charging elephants. ( Congratulations! The End. )\n"),
            choices: []
        },
        navigateRiver: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI navigated past a crocodile-infested river. I thought, What should I do?\n"),
            choices: [
                { name: "Swim across the river quickly", next: "swimQuick" },
                { name: "Find a makeshift raft to cross safely", next: "findRaft" }
            ]
        },
        swimQuick: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI swam across the river quickly, avoiding the crocodiles and reaching the other side safely. ( Congratulations! The End. )\n"),
            choices: []
        },
        findRaft: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI found a makeshift raft and used it to cross the river safely, outsmarting the crocodiles. Congratulations! The End.\n"),
            choices: []
        },
        explorePath: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI explored a different path, discovering hidden treasures along the way. ( Congratulations! The End. )\n"),
            choices: []
        },
        setCamp: {
            message: chalk.italic.bold.rgb(255, 0, 255)("\nI set up camp for the night. I thought, What should I do next?\n"),
            choices: [
                { name: "Gather firewood", next: "gatherFirewood" },
                { name: "Prepare dinner", next: "prepareDinner" }
            ]
        },
        gatherFirewood: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI gathered firewood and successfully lit a campfire. ( Congratulations! The End. )\n"),
            choices: []
        },
        prepareDinner: {
            message: chalk.italic.bold.rgb(57, 255, 20)("\nI prepared dinner and enjoyed a peaceful evening in the jungle. ( Congratulations! The End. )\n"),
            choices: []
        }
    };

    // Function to play the game
    async function playGame(scene: string): Promise<void> {
        const { message, choices } = story[scene];
        console.log(message);
        if (choices.length === 0) return;

        const { choice }: { choice: string } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: chalk.yellowBright.italic.bold('What do you choose?'),
                choices: choices.map(choice => choice.name)
            }
        ]);

        const nextScene = choices.find((c: Choice) => c.name === choice)?.next;
        if (nextScene) {
            await playGame(nextScene);
        }
    }

    // Starting the game from the jungle entrance
    playGame('enterJungle').then(() => console.log(chalk.italic.bold.rgb(255, 0, 255)("\n(🌟  Game Over! 🌟)\nAuthor:  Azmat Ali")));
