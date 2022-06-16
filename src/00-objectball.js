function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number:1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}


function numPointsScored(name) {
    let game = gameObject();
    if (game['home']['players'][name])
        return game['home']['players'][name]['points'];
    else
        return game['away']['players'][name]['points'];
}
//console.log(numPointsScored('Mason Plumlee'));

function shoeSize(name) {
    let stats = playerStats(name);
    return stats.shoe;
}


function teamColors(name) {
    let game = gameObject();
    if (game.home.teamName === name)
        return game['home']['colors'];
    else
        return game['away']['colors'];
}
//console.log(teamColors('Brooklyn Nets'));

function teamNames() {
    let game = gameObject();
    let teamNames = [];
    for (let gameKey in game) {
        teamNames.push(game[gameKey]['teamName']);
    }
    return teamNames;
}
//console.log(teamNames());

function playerNumbers(name) {
    let game = gameObject();
    let numbers = [];
    if (game['home']['teamName'] === name) {
        for (gameKey in game['home']['players']) {
            numbers.push(game['home']['players'][gameKey]['number']);
        }
    }
    else {
        for (gameKey in game['away']['players']) {
            numbers.push(game['away']['players'][gameKey]['number']);
        }
    }
    return numbers;
}
//console.log(playerNumbers('Brooklyn Nets'));

function playerStats(name){
    let game = gameObject();
    if (game['home']['players'][name])
        return game['home']['players'][name];
    else
        return game['away']['players'][name];
}
//console.log(playerStats('Alan Anderson'));

function bigShoeRebounds() {
    let game = gameObject();
    function getLargestShoe() {
        let player = {
            name : '',
            shoe : 0
        }
        for (gameKey in game.home.players) {
            let testShoe = shoeSize(gameKey);
            if (testShoe > player.shoe) {
                player.name = gameKey;
                player.shoe = testShoe;
            }
        }
        for (gameKey in game.away.players) {
            let testShoe = shoeSize(gameKey);
            if (testShoe > player.shoe) {
                player.name = gameKey;
                player.shoe = testShoe;
            }
        }
        return player;
    }
    let largestShoe = getLargestShoe().name;
    let stats = playerStats(largestShoe);
    return stats.rebounds;
}
//console.log(bigShoeRebounds());

