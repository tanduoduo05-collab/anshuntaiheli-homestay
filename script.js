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

function ShowSection(section) {
    HideAllSections();
    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });
}

StartButton.onclick = function() {
    ShowSection(GameSection);
};

BagButton.onclick = function() {
    ShowSection(BagSection);
};

StoreButton.onclick = function() {
    ShowSection(StoreSection);
};

BakeryButton.onclick = function() {
    ShowSection(BakerySection);
};