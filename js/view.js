"use strict";

window.addEventListener("load", function () {
    updateView();
})

function updateView() {
    document.getElementById("app").innerHTML = /* html */ `
        <h1>Tre På Rad</h1>
        ${showTurnHTML()}
        <div class="game-grid">
            ${getGameCellsHTML()}
        </div>
    `;
}

function getGameCellsHTML() {
    let html = '';
    for (let index = 0; index < model.fields.grid.length; index++) {
        const cell = model.fields.grid[index];
        const onclick = (cell == 0) ? `onclick="setField(${index})"` : '';
        let cssClass = '';
        if (cell == 1) cssClass = " icon-circle";
        if (cell == 2) cssClass = " icon-cross";
        html += /* html */ `
            <div class="game-cell${cssClass}"${onclick}></div>
        `;
    }
    return html;
}

function showTurnHTML() {
    if (model.app.turn === null) return '';
    return /* html */ `
        <div class="show-current-turn">
            <h2>Current Turn:</h2>
            <span class="current-turn-icon ${(model.app.turn == "circle") ? "icon-circle" : "icon-cross"}"></span>
        </div>
    `
}