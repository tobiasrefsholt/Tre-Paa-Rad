"use strict";

function setField(cellIndex) {
    console.log(model.app.turn);
    if (model.app.turn == "circle") {
        model.fields.grid[cellIndex] = 1;
        model.app.turn = "cross";
    } else if (model.app.turn == "cross") {
        model.fields.grid[cellIndex] = 2;
        model.app.turn = "circle";
    }
    const winner = checkForWinCondition();
    console.log(winner);
    if (winner !== null) endGame(winner);
    updateView();
}

function checkForWinCondition() {
    const [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3] = model.fields.grid;

    /* Check rows */
    if (isEqual([r1c1, r1c2, r1c3])) return r1c1;
    if (isEqual([r2c1, r2c2, r2c3])) return r2c1;
    if (isEqual([r3c1, r3c2, r3c3])) return r3c1;
    
    /* Check columns */
    if (isEqual([r1c1, r2c1, r3c1])) return r1c1;
    if (isEqual([r1c2, r2c2, r3c2])) return r1c2;
    if (isEqual([r1c3, r2c3, r3c3])) return r2c3;

    /* Check diagonals */
    if (isEqual([r1c1, r2c2, r3c3])) return r1c1;
    if (isEqual([r3c3, r2c2, r1c3])) return r3c3;

    return null;
}

function isEqual(numberArray) {
    if (numberArray[0] === 0) return false;
    return numberArray.every(val => val === numberArray[0]);
}

function endGame(winner) {
    if (winner == 1) {
        model.app.winner = "circle";
    } else if (winner == 2) {
        model.app.winner = "cross";
    }
    model.app.turn = null;
    updateView();
}

function restartGame() {
    for (let index = 0; index < model.fields.grid.length; index++) {
        model.fields.grid[index] = 0;
    }
    model.app.winner = null;
    model.app.turn = "circle";
    updateView();
}