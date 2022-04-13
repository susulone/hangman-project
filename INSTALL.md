{@tutorial Install}

## Install

---

To play the game from your computer and/or contribute to this project, perform the following steps:

1. Clone the repository
2. Install Node.js
3. Install the dependencies

### Clone the repository

The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:

![git clone](https://i.postimg.cc/FHb7f4GX/git-clone-and-cd.jpg)

### Install Node.js

If you don't already have Node.js installed on your computer, you can install the latest version here: <https://nodejs.org/en/>.

### Install the dependencies

The following npm packages are dependencies to the project. You must install these packages in the project root directory (tamk-VCT-testing-project) to be able to play Hangman from the command line.

After you clone the repository to a local directory, change directory to the project root directory (tamk-VCT-testing-project) and run the following command to install the required npm packages:

![npm install](https://i.postimg.cc/F15HRWLK/npm-install.jpg)

- readline-sync npm package (https://www.npmjs.com/package/readline-sync) used to prompt users for a letter throughout the game.

Version information for each of these packages is available in the package.json file in the project root directory.

## Starting the game

---

To start the game, run the following command from the project root directory (tamk-VCT-testing-project):

![node index.js](https://i.postimg.cc/vHfWvCX3/node-index-js.jpg)

When you run this command, you will see the following screen:

## Playing the game

---

When the game starts, you will be given a word and the number of letters in that word.

When prompted, try to guess a letter that is in the word.

![starting point](https://i.postimg.cc/MpYVCRCB/game-start.jpg)

You start the game with 6 guesses. If your guess is incorrect, the number of guesses remaining decreases by 1.

![wrong guess](https://i.postimg.cc/LXG1tV1c/game-wrong-guess.jpg)

If your guess is correct, the letter is added to the word.

![right guess](https://i.postimg.cc/020zjvVR/game-right-guess.jpg)

If you guess all the letters in the word before the number of guesses reaches 0, you win.

![game won](https://i.postimg.cc/vBPdkPzK/game-win.jpg)
