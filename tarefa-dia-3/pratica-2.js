let teclado = require('prompt-sync')();

console.log("Insira um valor n inteiro: ");

let num = teclado();

let cont = 1;

console.log(`Tabuada de ${num}`);

while(cont <= 10){
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;

}