// @ts-check

/**
 * Contains everything to do with the words.
 * @module Words
 * @namespace Words
 */
const words = {
  /**
   * This array holds all the words used in the game
   * @memberof words
   * @type {Array}
   */
  list: ["ardvark", "baboon", "camel"],
  /**
   * This method generates one random word from a the array of words given as an argument.
   * @memberof words
   * @returns {String}  one randomly selected word from the <tt>words</tt> array
   */
  getWord() {
    const randomWord =
      words.list[Math.floor(Math.random() * words.list.length)];

    return randomWord.toUpperCase();
  },
  /**
   * This method takes the word given as an argument and returns an equal amount of blank spaces (<tt>'_'</tt>).
   * @memberof words
   * @param {any} chosenWord a word of random length
   * @returns {Array} the same amount of underscores as the <tt>chosenWords</tt> has letters
   */
  displayWord: (chosenWord) => {
    const answerArray = [];

    for (const char in chosenWord) {
      answerArray.push("_");
    }

    return answerArray;
  },
};

export default words;
