function microondas(prato, tempoDoCliente){
    let comida = prato;
    let tempoPadrao = 0;

switch (comida){
    case "pipoca":
        tempoPadrao = 10
    break
    case "macarrão":
        tempoPadrao = 8
    break
    case "carne":
        tempoPadrao = 15
    break
    case "feijão":
        tempoPadrao = 12
    break
    case "brigadeiro":
        tempoPadrao = 8
    break
    default:
        return "Prato Inexistente";
}
if(tempoDoCliente < tempoPadrao){
        return "Prato Pronto \nTempo Insuficiente!"
}else if(tempoDoCliente >= tempoPadrao && tempoDoCliente < (tempoPadrao*2)){
        return "Prato pronto, bom apetite!!"
}else if(tempoDoCliente >= (tempoPadrao*2) && tempoDoCliente < (tempoPadrao*3)){
        return "Oops, a comida queimou!"
}else if(tempoDoCliente >= (tempoPadrao*3)){
        return "Kabumm"
}
}


console.log(microondas("pipoca", 10))
console.log(microondas("pipoca", 2))
console.log(microondas("pipoca", 50))
console.log(microondas("pipoca", -2))
console.log(microondas("pipoca", 20))
