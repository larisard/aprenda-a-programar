let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
      let valorImpostos = 1.2 * produtoA.valor;

      console.log("O produto é internacional")
      console.log(valorImpostos)
}
else {
    let valorImpostos = 1.12 * produtoA.valor;
    console.log("O produto é nacional")
    console.log(valorImpostos)
}

if (produtoB.internacional == true) {
    let valorImpostos = 1.2 * produtoB.valor;

    console.log("O produto é internacional")
    console.log(valorImpostos)
}
else {
  let valorImpostos = 1.12 * produtoB.valor;
  console.log("O produto é nacional")
  console.log(valorImpostos)
}

if (produtoC.internacional == true) {
    let valorImpostos = 1.2 * produtoC.valor;

    console.log("O produto é internacional")
    console.log(valorImpostos)
}
else {
  let valorImpostos = 1.12 * produtoC.valor;
  console.log("O produto é nacional")
  console.log(valorImpostos)
}