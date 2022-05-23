console.log(document);

//selektorn getelementbyid matchar mot elementet som har id't som skickas in
let myHeading = document.getElementById('dom-manipulation');
console.log(myHeading);

//selektorn getelementsbyclassname matchar mot element i DOM'en som har klassnamnet som skickas in
let paragraphElements =
    document.getElementsByClassName('paragraph');

console.log(paragraphElements);

//targetar första elementet i vår lista som vi fick in ovan.
//byter ut texten i elementet till en ny sträng
paragraphElements[0].innerText = "Maja";

//targeta alla p-element
let pTags = document.getElementsByTagName('p');
pTags[1].innerText = "Anton";

//ändrar klassnamn på element
pTags[2].className = "hide";

//targeta FÖRSTA elementet som matchar med selektorn
let firstLi = document.querySelector('#firstLi');
firstLi.innerText = "David";

//targeta ALLA element som matchar
let allLi = document.querySelectorAll('li');
allLi[1].innerText = "Lisa";




//eventlyssnare
let button = document.querySelector('button');
//eventlyssnare tar in två argument; vad den skall lyssna på och vad som skall hända när den triggas
button.addEventListener('click', function() {
    console.log('hej');
    //targetar body-elementet
    let bodyElem = document.querySelector('body');
    //skapar en ny h1
    let newElem = document.createElement('h1');
    //stoppar in en text i vår nya h1
    newElem.innerText = "Folkuniversitetet";
    //här trycker vi in det nya elementet i vårt body-element
    bodyElem.appendChild(newElem);
})