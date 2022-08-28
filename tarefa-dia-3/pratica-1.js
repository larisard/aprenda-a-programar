let teclado = require('prompt-sync')();

console.log("Insira um valor n inteiro: ");

let n = teclado();


let i = 1;

while (i <= n){
    console.log(i);
    i++;
}
console.log("Fim!");