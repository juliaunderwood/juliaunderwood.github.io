var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 500, "y": 300 },
                { "type": "sawblade", "x": 1500, "y": 210 },
                { "type": "sawblade", "x": 3000, "y": 210 },
                { "type": 'myObstacle', "x": 100, "y": 200},
                { "type": "enemy", "x": 3500, "y": 300}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
function createSawblade(x, y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.scaleX = 0.2;
    sawBladeHitZone.y = y;
    sawBladeHitZone.scaleY = 0.3;
    game.addGameItem(sawBladeHitZone);   
    var obstacleImage = draw.bitmap('img/possum.jfif');
    sawBladeHitZone.addChild(obstacleImage); 
    obstacleImage.x = -25;
    obstacleImage.y = -25;
}       

createSawblade(300, 210);
createSawblade(2000, 300);
createSawblade(1000, 300);   

function createMyObstacle(x,y) {
    var newHitZoneSize = 25;
    var newDamageFromObstacle = 10;
    var obstacleHitZone = game.createObstacle(newHitZoneSize, newDamageFromObstacle);
    obstacleHitZone.x = x;
    obstacleHitZone.scaleX = 0.2;
    obstacleHitZone.y = y;
     obstacleHitZone.scaleY = 0.3;
    game.addGameItem(obstacleHitZone);   
    var obstacleImage = draw.bitmap('img/possum.jfif'); 
    obstacleHitZone.addChild(obstacleImage); 
    obstacleImage.x = -25;
    obstacleImage.y = -25;
}
createMyObstacle(2500,285);

for (var i = 0; i < levelData.gameItems.length; i++) {
    var eachElement = levelData.gameItems[i];
    var firstGameItemObject = levelData.gameItems[i];
    var firstX = firstGameItemObject.x;
    var firstY = firstGameItemObject.y;
    createSawblade(firstX, firstY);
    
}
function createEnemy(x, y) {
    var enemy =  game.createGameItem('enemy',25);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -2;
    enemy.rotationalVelocity = 5;
    var enemyImage = draw.bitmap('img/lobster.jpg');
    enemy.addChild(enemyImage);
    enemyImage.x = -25;
    enemyImage.y = -25;
    enemy.scaleX = 0.05;
    enemy.scaleY = 0.06;
    
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
    }; 
    
    enemy.onProjectileCollision = function() {
        game.increaseScore(100);
        enemy.fadeOut();
    };
}

createEnemy(1750, 260);
createEnemy(800, 260);
createEnemy(2800, 260);
createEnemy(3700, 260);

function createReward(x, y) {
    var reward =  game.createGameItem('reward',25);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -2;
    var rewardImage = draw.bitmap('img/star.jpg');
    reward.addChild(rewardImage);
    rewardImage.x = -25;
    rewardImage.y = -25;
    reward.scaleX = 0.09;
    reward.scaleY = 0.09;
    
    
    reward.onPlayerCollision = function() {
        game.increaseScore(100);
        reward.fadeOut();
    }; 
    

}

createReward(1250, 190);
createReward(2300, 190);
createReward(3300, 190);
createReward(4000, 190);
// DO NOT EDIT CODE BELOW HERE
    };
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}


