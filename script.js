let numberCards = 0;

function chooseNumberCards() {
    while (numberCards < 4 || (numberCards % 2) != 0 || numberCards > 14) {
        numberCards = parseInt(prompt("Qual o número de cartas que deseja jogar? (Escolha entre 4 e 14 e somente números pares) "))
    }
}
chooseNumberCards();
