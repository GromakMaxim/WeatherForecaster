export function initCardSelection(){
    let cards = document.getElementsByClassName("field");
    for (let card of cards){
        card.addEventListener("click", function (event){
            event.preventDefault();
            if (card.classList.contains("selected-card")){
                card.classList.remove("selected-card");
            } else {
                deselect(cards);
                card.classList.add("selected-card");
            }
        })
    }
}

function deselect(cards){
    for(let card of cards){
        card.classList.remove("selected-card");
    }
}