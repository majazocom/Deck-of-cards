//skriva själva funktionen för att generera korten
function generateDeck() {
    //lägger våra suits i en lista för att använda sedan i vår loop
    //när vi skall generera x antal kort för varje suit
    let suits = ['hjärter', 'klöver', 'ruter', 'spader'];
    //console.log(suits.length);

    //initiera ett tomt deck
    let deck = [];

    //skapa en loop, eftersom att vi vill använda oss av suitsen för att lägga in kort mellan 2 till ess
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        //++ (increment operator)
        //console.log('suitIndex: ' + suitIndex);

        //nu vill vi skriva en till loop
        //för att vi skall generera 13 kort för varje suit
        for (let cardNumber = 2; cardNumber <= 14; cardNumber++) {
            //vi vill att korten med nummer mellan 11 - 14 skall heta något istället
            let value = cardNumber;

            if (value == 11) { value = 'J' }
            if (value == 12) { value = 'D' }
            if (value == 13) { value = 'K' }
            if (value == 14) { value = 'A' }
            //console.log('value: ' + value);

            //sätta korrekt färg på varje suit
            //console.log(suits[suitIndex]);
            let color = '';
            if (suits[suitIndex] == 'hjärter') { color = 'röd' }
            if (suits[suitIndex] == 'klöver') { color = 'svart' }
            if (suits[suitIndex] == 'ruter') { color = 'röd' }
            if (suits[suitIndex] == 'spader') { color = 'svart' }
            //console.log(color);

            //skapa ett objekt, med olika värden som är specifika för kortet
            let card = {
                value: value,
                color: color,
                suit: suits[suitIndex],
                rank: cardNumber
            }
            deck.push(card);
        }
    }
    //när funktionen kallas på, kommer den att returnera deck
    return deck;
}

//kalla på funktionen och spara det funktionen returnerar i en variabel
let deck = generateDeck();
console.log(deck);