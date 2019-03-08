var yodasay = require('yodasay');

var eatBrains = require('./eatBrains');

var input = process.argv[2];
var mood = eatBrains(input);


console.log(yodasay.say({
  text : "Eating " + input + " makes me feel " + mood,
}));