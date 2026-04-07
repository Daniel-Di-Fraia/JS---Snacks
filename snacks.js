/* ===============================
   ESERCIZI PRATICI
   Scrivi il codice sotto ogni consegna
   =============================== */

/* 1) Confronta a e b (==) e stampa il risultato */
let a = 5;
let b = "5";
console.log(a == b);

/* 2) Confronta a e b (===) e stampa il risultato */
console.log(a === b);

/* 3) Stampa il tipo di x */
let x;
console.log(typeof(x));

/* 4) Stampa il tipo di null */
console.log(typeof null);

/* 5) Stampa il risultato: 2 + "3" - 1 */
console.log(2 + "3" -1);
console.log(2 + Number("3") -1);


/* ---------- ARRAY ---------- */

/* 6) Aggiungi 4 all’array e stampa la lunghezza */
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1.length);

/* 7) Stampa l’ultimo elemento dell’array */
console.log(arr1[3]);

/* 8) Crea un nuovo array con i valori raddoppiati */
const doubledArray = arr1.map((val) => val * 2);
console.log(doubledArray);

/* 9) Crea un array con i numeri > 1 */
const filtered = arr1.filter((val) => val > 1);
console.log(filtered);

/* 10) Somma tutti i valori dell’array */
const sommaArray = arr1.reduce((accumulator, current) => accumulator + current, 0);
console.log(sommaArray);


/* ---------- OGGETTI ---------- */

/* 11) Stampa il nome dell’utente */
const user = { name: "Luca", age: 30 };
console.log(user.name);

/* 12) Stampa l’età usando le [] */
console.log(`[${user.age}]`);

/* 13) Aggiungi city: "Roma" e stampa l’oggetto */
user.city = "Roma";
console.log(user); //controllato

/* 14) Destruttura name e stampalo */
const nomeTizio = user.name;
console.log(nomeTizio);

/* 15) Verifica se esiste "city" */
if(user.city){
  console.log(true);
}else {
  console.log(false);
}


/* ---------- FUNZIONI ---------- */

/* 16) Crea una funzione che somma 2 numeri e stampala */
function SommaNumeri(a,b){
  return a + b;
}
console.log(SommaNumeri(3,4));

/* 17) Crea una arrow function che ritorna 10 e stampala */
const ten = () => 10; 
console.log(ten);

/* 18) Stampa il valore ritornato dalla funzione */
function test(a) {
  return;
  a * 2;
}
console.log(test(2));

/* 19) Esegui una IIFE che stampa "JS" */
(function() {
    console.log("JS");
})(); //controllato

/*20) Usa una funzione che ritorna un’altra funzione per sommare 2 e 3 */
function sommatore(x) {
  return function (y) {
    return x + y;
  };
}
const add2 = sommatore(2);
console.log(add2(3)); //controllato



/* ---------- SCOPE / HOISTING ---------- */

/* 21) Stampa x prima della dichiarazione */
console.log(x2);
var x2 = 10;

/* 22) Prova a stampare y prima della dichiarazione */
// console.log(y);
// let y = 10;

/* 23) Stampa a fuori dal blocco */
{
  let a2 = 1;
}
// console.log(a2);

/* 24) Stampa il valore di a dentro la funzione */
let a3 = 1;
function prova() {
  let a3 = 2;
  console.log(a3);
}
prova(); //controllato

/* 25) Stampa a prima della dichiarazione con let */
// console.log(a4);
let a4 = 3;


/* ---------- ARRAY AVANZATI ---------- */

/* 26) Stampa ogni elemento */
const nums1 = [1, 2, 3];
nums1.forEach((val) => console.log(val)); //controllato

/* 27) Crea un nuovo array aggiungendo 1 a ogni valore */
const newArray = nums1.map((val) => val + 1);
console.log(newArray);

/* 28) Trova il primo numero > 1 */
const trovare = nums1.find((val) => val > 1);
console.log(trovare);

/* 29) Verifica se tutti i numeri sono pari */
for(let i=0; i<nums1.length; i++){
  if(nums1[i] % 2 !== 0){
    pariODisp = false;
  } else {
    pariODisp = true;
  }
}
console.log(pariODisp);
// const tuttiPari = nums1.every(n => n % 2 === 0);
// console.log(tuttiPari);

/* 30) Verifica se almeno un numero è pari */
const almenoPari = nums1.some((val) => val % 2 === 0);
console.log(almenoPari);


/* ---------- STRINGHE ---------- */

/* 31) Stampa la stringa in maiuscolo */
const s1 = "ciao";
console.log(s1.toUpperCase());

/* 32) Stampa la lunghezza */
const s2 = "JS";
console.log(s2.length);

/* 33) Verifica se contiene "e" */
const s3 = "hello";
if(s3.includes('e')){
  console.log("contiene la lettera e");
}

/* 34) Trasforma in array */
const s4 = "a,b,c";
console.log(s4.split());

/* 35) Rimuovi gli spazi */
const s5 = "  test  ";
console.log(s5.trim());


/* ---------- ASYNC / PROMISE ---------- */

// /* 36) Stampa in ordine corretto */
// console.log("A");
// // setTimeout(() => console.log("B"), 0);
// // setTimeout(() => console.log("C"), 0);

// /* 37) Stampa il valore della Promise */
// Promise.resolve(5);
// Promise.resolve(5).then(value => console.log(value));

// /* 38) Stampa cosa ritorna una funzione async */
// async function f() {
//   return 10;
// }
// f().then(value => console.log(value));

// /* 39) Stampa il valore risolto dalla Promise */
// async function testAsync() {
//   const n = await Promise.resolve(3);
// }
// testAsync().then(value => console.log(value));

// /* 40) Gestisci e stampa l’errore */
// Promise.reject("err");
// Promise.reject("err").catch(err => console.log(err));


/* ---------- Generici ---------- */

/* 41) Confronta due array vuoti */
// [] == [];
const ciao = [];
const addio = [];
console.log(ciao == addio);

/* 42) Confronta array vuoto e false */
// [] == false;
const ciaoz = [];
const addioz = false;
console.log(ciaoz == addioz);

/* 43) Stampa il risultato */
// {} + [];
console.log(({}) + []);


/* 44) Somma i boolean */
// true + true;
console.log(true + true);


/* 45) Converti la stringa in boolean */
// ""
console.log(Boolean(""));


/* ---------- DESTRUCTURING / SPREAD ---------- */

/* 46) Destruttura il secondo valore */
const arr2 = [1, 2];
const [, secondo] = arr2;
console.log(secondo);

/* 47) Destruttura x dall’oggetto */
const obj = { val: 1, val2: 2 };
const { val } = obj;
console.log(val);

/* 48) Usa lo spread per creare [1,2,3] */
const base = [1, 2];
const arrNuovo1 = [...base, 3];
console.log(arrNuovo1);


/* 49) Conta gli argomenti */
function sum(...n) {console.log(n.length)}
sum(1);
sum(2,3,7);

/* 50) Modifica l’oggetto tramite riferimento */
const o = { a: 1 };
const p = o;
p.a = 999;
console.log(o.a);