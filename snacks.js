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