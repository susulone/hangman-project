# Install

## Getting started

To play the game from your computer and/or contribute to this project, perform the following steps:

1.[Clone the repository](#clone) 2.[Install Node.js](#node) 3. [Install the dependencies](#dependencies) 4. Run tests 5. Start game

### Clone the repository<a name="clone"></a>

The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

```bash
  git clone https://github.com/susulone/hangman-project
  cd hangman-project
```

### Install Node.js<a name="node"></a>

If you don't already have Node.js installed on your computer, you can install the latest version here: <https://nodejs.org/en/>.

### Install the dependencies<a name="dependencies"></a>

The following npm packages are dependencies to the project. You must install these packages in the project root directory (hangman-project) to be able to play Hangman from the command line.

After you clone the repository to a local directory, change directory to the project root directory (hangman-project) and run the following command to install the required npm packages:

```bash
  npm install
```

This project was build using [Node.js](https://nodejs.org/en/) and ECMAScript2015+ syntaxes.

- [chalk npm package](https://www.npmjs.com/package/chalk) - used to add color and styling to the game
- [readline-sync npm package](https://www.npmjs.com/package/readline-sync)- used to prompt users for a letter throughout the game
- [jest npm package](https://www.npmjs.com/package/jest) - testing framework for javascript
- [jest-extended npm package](https://www.npmjs.com/package/jest-extended) - adds additional matchers to jest's default ones
- [@babel/preset-env npm package](https://www.npmjs.com/package/@babel/preset-env) - enables the use of ESM with jest
- [jsdoc npm package](https://www.npmjs.com/package/jsdoc) - an API documentation generator for JavaScript.
- [jsdoc-to-markdown npm package](https://www.npmjs.com/package/jsdoc-to-markdown) - generates markdown API documentation from jsdoc annotated source code
- [docdash npm package](https://www.npmjs.com/package/docdash) - documentation template theme for JSDoc 3

Version information for each of these packages is available in the package.json file in the project root directory.

## Run the tests

To run the unit tests, run the following command from the project root directory (hangman-project):

```bash
  npm run testAll
```

This will run all the tests inside the projects and updates the coverage report inside the project's subfolder called coverage. You can view the summary of the testing by opening the clover.xml with VSCode's Live Server extension and access the report in http://localhost:port/coverage/lcov-report/.

## Starting the game

To start the game, run the following command from the project root directory (hangman-project):

```bash
  npm run start
```

When you run this command, you will see the following screen:

![starting point](https://i.postimg.cc/Y9rS7JKN/game-start.png)

## Playing the game

When the game starts, you will be given a word and the number of letters in that word, try to guess a letter that is in the word. Select your letter and press enter.

![starting point](https://i.postimg.cc/Y9rS7JKN/game-start.png)

You start the game with 6 guesses. If your guess is incorrect, the number of guesses remaining decreases by 1.

![wrong guess](https://i.postimg.cc/XvJVD9wx/game-wrong-answer.gif)

If your guess is correct, the letter is added to the word.

![right guess](https://i.postimg.cc/d3W6nPv5/game-correct-answer.gif)

If you guess all the letters in the word before the number of guesses reaches 0, you win.

![game won](https://i.postimg.cc/htm8Q7Jy/game-win.gif)
