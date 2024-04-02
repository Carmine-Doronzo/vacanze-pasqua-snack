/** Cifrario - Facile
 * Data una stringa, restituire la versione in 
 * alfabeto farfallino (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)
*/
console.log('Cifrario - Facile:Data una stringa, restituire la versione in alfabeto farfallino')



let translate = document.querySelector('.translate')
let stringArray = [];


translate.addEventListener('click', function () { farfallino() })

function farfallino() {
    let string = document.querySelector('.string').value
    let result = document.querySelector('.result')
    for (let i = 0; i < string.length; i++) {

        const letter = string[i];

        if (letter === 'a') {

            stringArray.push('afa');

        } else if (letter === 'e') {

            stringArray.push('efe');

        } else if (letter === 'i') {

            stringArray.push('ifi');

        } else if (letter === 'o') {

            stringArray.push('ofo');

        } else if (letter === 'u') {

            stringArray.push('ufu');

        } else {

            stringArray.push(letter);

        }
    }

    let stringFarfallino = stringArray.join('')



    result.innerHTML += `<li>${stringFarfallino}</li>`
    document.querySelector('.string').value = ''
    stringArray = []


    return stringFarfallino

}








/**Stringa "infinita" - Difficile
 * Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita, restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi.
 */
console.log('Stringa "infinita" - Difficile :Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita, restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi.')

const infinity = 'ciaociaociaociaociaociaociaociaociaociaociaociaociaociaociaociao';

const iMin = 8;
const iMax = 12;

const letter = [];

for (let i = iMin; i <= iMax; i++) {
    const currentLetter = infinity[i];
    letter.push(currentLetter)
}

console.log(letter.join(''));

/**Array facile
 * dato un array di numeri interi,restituire un array con solo numeri pari
 */

console.log('Array facile (metodo lungo):dato un array di numeri interi,restituire un array con solo numeri pari');

const generateArray = document.querySelector('.generate')

let evenArray = document.querySelector('.even')
let numeri = [];
numeri.sort((function (a, b) { return a - b }))
generateArray.addEventListener('click', function () {
    let inputNumberDom = document.querySelector('.number-input').value

    let pari = [];

    let min = 1;
    let max = inputNumberDom;
    while (numeri.length < max) {

        const randomNumber = Math.floor(Math.random() * max) + min;

        let presente = false;

        for (let i = 0; i < numeri.length; i++) {

            if (numeri[i] === randomNumber) {
                presente = true;
            }

        }

        if (presente === false) {
            numeri.push(randomNumber);
        }

    }

    for (let i = 0; i < numeri.length; i++) {

        let numeroCor = numeri[i];
        let rest = numeroCor % 2;

        if (rest === 0) {
            pari.push(numeroCor);
        }

    }
    console.log('numeri', numeri);
    console.log('pari', pari);

    evenArray.innerHTML = `
    numeri generati: ${numeri.sort(function (a, b) { return a - b })} <br>
    numeri pari: ${pari.sort(function (a, b) { return a - b })}
    `


    document.querySelector('.number-input').value =''


})



/**Array medio 1
 * Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)
*/
console.log('Array medio 1:Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari (su richiesta dell utente')
let evenDom = document.querySelector('.even-med')
let evenOddDom = document.querySelector('.odd-even')
evenDom.addEventListener('click', function () {
    if (numeri.length <= 0) {
        evenOddDom.innerHTML = `clicca prima su genera array e poi riseleziona pari o dispari`
    } else {

        //console.log('click')
        console.log('Array facile (metodo Corto):dato un array di numeri interi,restituire un array con solo numeri pari')

        const numeriPari = numeri.filter((num) => num % 2 === 0);

        console.log('numeri pari', numeriPari)
        evenOddDom.innerHTML = `numeri pari : ${numeriPari} (metodo corto di Array-facile)`
    }
})
const oddDom = document.querySelector('.odd-med')
oddDom.addEventListener('click', function () {

    if (numeri.length <= 0) {
        evenOddDom.innerHTML = `clicca prima su genera array e poi riseleziona pari o dispari`
    } else {

        //console.log('click')


        const numeriDispari = numeri.filter((num) => num % 2 !== 0);

        console.log('numeri dispari', numeriDispari)
        evenOddDom.innerHTML = `numeri dispari : ${numeriDispari}`
    }
})

/**array Medio - versione 2
 * Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato
*/
console.log('array Medio 2 : Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato ')

const buttonModule = document.querySelector('.module')
let moduleResult = document.querySelector('.module-result')
buttonModule.addEventListener('click', function () {
    let userNumber = document.querySelector('.user-number').value
    if (numeri.length <= 0) {
        moduleResult.innerHTML = `clicca prima su genera array e inserisci un numero intero`
    } else if (userNumber <= 0 || isNaN(userNumber)) {
        moduleResult.innerHTML = `inserisci un numero intero superiore a 0 e non caratteri`
    } else {
        const numeriModule = numeri.filter((num) => num % userNumber === 0);
        moduleResult.innerHTML = `numeri divisibili per ${userNumber} : ${numeriModule}`
        console.log(`numeri divisibili per ${userNumber} : ${numeriModule}`)
    }
    document.querySelector('.user-number').value = ''
})

/**array difficile
 * Dato un array di oggetti, ordinare l'array in base al valore di una proprietà degli oggetti (es. name: “Marco”, age: 22)
*/
console.log('array difficile: Dato un array di oggetti, ordinare l array in base al valore di una proprietà degli oggetti (es. name: Marco, age: 22)Dato un array di oggetti, ordinare l array in base al valore di una proprietà degli oggetti (es. name: Marco, age: 22) ')
const objectArrayDom = document.querySelector('.object-array')
const objectArrayOrderDom = document.querySelector('.object-array-order')
const reorderDom = document.querySelector('.reorder')
arrayObjects = [
    { name: "Marco", age: 22 },
    { name: "Anna", age: 24 },
    { name: "Luca", age: 17 },
    { name: "Gianni", age: 53 }
]
console.log(arrayObjects)
for (let i = 0; i < arrayObjects.length; i++) {
    objectArrayDom.innerHTML += `<li>nome: ${arrayObjects[i].name} eta':${arrayObjects[i].age}</li>`
}
reorderDom.addEventListener('click', function () {

        
        let reorderArray = arrayObjects.sort(function (a, b) { return a.age - b.age })
        console.log(reorderArray)
        for (let i = 0; i < reorderArray.length; i++) {
            objectArrayOrderDom.innerHTML += `<li>nome: ${reorderArray[i].name} eta':${reorderArray[i].age}</li>`
        }
    
})



/**Progetto vue 
 * Convertitore di Valuta: Crea una pagina web con un input per inserire un importo e una select per selezionare la valuta in cui convertire l’importo.
   L’importo inserito dall’utente sarà sempre in Euro.
   Quando l'utente inserisce il valore e seleziona la valuta, mostra il risultato della conversione.
*/


const { createApp } = Vue

createApp({
    data() {
        return {
            userValue: '',
            converted: 0
        }

    }, mounted() {

    },
    methods: {
        convert() {
            const selectDom = document.querySelector('#valuta').value
            let currency
            if (selectDom === 'dollari') {

                currency = 1.08

            } else if (selectDom === 'sterline') {

                currency = 0.85
            }

            this.converted = (this.userValue * currency).toFixed(2)
            this.userValue = ''

        }
    }
}).mount('#app')



