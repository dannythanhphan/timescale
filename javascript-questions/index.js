const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let result = [];
  for (const hero of heroes) {
    if (hero.publisher === "Marvel Comics") result.push(hero);
  }
  return result;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  for (const hero of heroes) {
    hero.characters = hero.characters.split(", ");
  }
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let result = {'DC Comics': [], 'Marvel Comics': []};

  for (const hero of heroes) {
    if (hero.publisher === "Marvel Comics") {
      result["Marvel Comics"].push(hero);
    } else {
      result["DC Comics"].push(hero);
    }
  }
  return result;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let moreThanOneCharacters = [];

  for (const hero of heroes) {
    if (hero.characters.length > 1 && hero.publisher === "DC Comics") {
      moreThanOneCharacters.push(hero);
    } 
  }

  return moreThanOneCharacters
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
