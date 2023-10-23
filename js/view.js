"use strict";

window.addEventListener("load", function () {
    updateView();
})

function updateView() {
    document.getElementById("app").innerHTML = /* html */ `
        <h1>Tre På Rad</h1>
        ${getTurnHTML()}
        ${getWinMessageHTML()}
        <div class="game-grid">
            ${getGameCellsHTML()}
        </div>
    `;
}

function getGameCellsHTML() {
    let html = '';
    for (let index = 0; index < model.fields.grid.length; index++) {
        const cell = model.fields.grid[index];
        const onclick = (cell == 0 && model.app.winner === null) ? `onclick="setField(${index})"` : '';
        let cssClass = '';
        if (cell == 1) cssClass = " icon-circle";
        if (cell == 2) cssClass = " icon-cross";
        html += /* html */ `
            <div class="game-cell${cssClass}"${onclick}></div>
        `;
    }
    return html;
}

function getTurnHTML() {
    if (model.app.turn === null) return '';
    return /* html */ `
        <div class="show-current-turn">
            <h2>Current Turn:</h2>
            <span class="current-turn-icon ${(model.app.turn == "circle") ? "icon-circle" : "icon-cross"}"></span>
        </div>
    `
}

function getWinMessageHTML() {
    if (model.app.winner === null) return '';
    return /* html */ `
        <h1 class="winner-text">${model.app.winner} is the winner!</h1>
        <button onclick="restartGame()">Play again</button>
    `;
}