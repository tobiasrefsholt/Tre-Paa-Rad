"use strict";

window.addEventListener("load", function () {
    updateView();
})

function updateView() {
    document.getElementById("app").innerHTML = /* html */ `
        <h1>Tre På Rad</h1>
        <div class="game-grid">
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
            <div class="game-cell"></div>
        </div>
    `;
}