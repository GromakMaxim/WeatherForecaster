export function initCardSelection() {
    let cards = document.getElementsByClassName("field");
    for (let card of cards) {
        card.addEventListener("click", function (event) {
            event.preventDefault();
            if (card.classList.contains("selected-card")) {
                card.classList.remove("selected-card");
            } else {
                deselect(cards);
                card.classList.add("selected-card");
            }
            hourlyCardSelection();
        })
    }
}

function hourlyCardSelection() {
    let cards = document.getElementsByClassName("field");
    let selected = false;
    for (let card of cards) {
        if (card.classList.contains("selected-card")) {
            selected = true;
            document.getElementsByClassName("weather-details")[0].classList.remove("hidden");
            break;
        }
    }
    if (!selected) document.getElementsByClassName("weather-details")[0].classList.add("hidden");
}

function deselect(cards) {
    for (let card of cards) {
        card.classList.remove("selected-card");
    }
}