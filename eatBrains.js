// Internal behaviour

function eatBrains(species) {
  species = species.toLowerCase();
  if (species === 'humans') {
    return '🤗';
  } else if (species === 'dog') {
    return '😢';
  } else if (species === 'cat') {
    return "😻"
  }

  return '🤷‍♂️';
}
module.exports = eatBrains;

// function zombieAttack() {

// }
// exports.zombieAttack = zombieAttack;

// function move(speed) {

// }
// exports.move = move;

// exports.eatBrains = eatBrains;
// exports.emoji = "💩";
// exports.pancake = [];