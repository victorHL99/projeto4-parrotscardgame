let numberCards = 0;


const arrayCards = [];


//função para escolher numero de cartas
function chooseNumberCards() {
    while (numberCards < 4 || (numberCards % 2) !== 0 || numberCards > 14) {
        numberCards = parseInt(prompt("Qual o número de cartas que deseja jogar? (Escolha entre 4 e 14 e somente números pares) "))
    }
}


function addCards() {
    for (let i = 0; i < numberCards.length; i++) {
        arrayCards.push = (`
        <div class="card ">
            <button class="front-face face">
                <img src="img/front.png" alt="imagem papagaio">
            </button>
            <div class="back-face face">
                <img src="${arrayCards[i]}" alt="teste"> 
            </div>
        </div>`);

        arrayCards.push = (`
        <div class="card ">
            <button class="front-face face">
                <img src="img/front.png" alt="imagem papagaio">
            </button>
            <div class="back-face face">
                <img src="${arrayCards[i]}" alt="teste"> 
            </div>
        </div>`);
    }


}

chooseNumberCards();
addCards();
/*cards = Array.from(document.getElementsByClassName("card"));

addCards();*/