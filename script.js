let StartButton = document.getElementById("StartButton");
let BagButton = document.getElementById("BagButton");
let StoreButton = document.getElementById("StoreButton");
let BakeryButton = document.getElementById("BakeryButton");

let BagSection = document.getElementById("BagSection");
let StoreSection = document.getElementById("StoreSection");
let BakerySection = document.getElementById("BakerySection");
let GameSection = document.getElementById("GameSection");

function HideAllSections() {
    BagSection.classList.add("hidden");
    StoreSection.classList.add("hidden");
    BakerySection.classList.add("hidden");
    GameSection.classList.add("hidden");
}

StartButton.onclick = function() {
    HideAllSections();
    GameSection.classList.remove("hidden");
};

BagButton.onclick = function() {
    HideAllSections();
    BagSection.classList.remove("hidden");
};

StoreButton.onclick = function() {
    HideAllSections();
    StoreSection.classList.remove("hidden");
};

BakeryButton.onclick = function() {
    HideAllSections();
    BakerySection.classList.remove("hidden");
};