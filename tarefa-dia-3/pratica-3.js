let teclado = require("prompt-sync")();
 
let cont = 1; 
console.log("Insira um valor n inteiro: ");

let num = teclado();

while(cont <= num) {
    if (cont % 2 == 1){
        console.log(`${cont}`)
    }
    cont++;
}