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
    checkForWinCondition();
    updateView();
}

function checkForWinCondition() {

}