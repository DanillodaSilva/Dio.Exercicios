let vit = Number(prompt("Digite quantas vitorias você tem:"))
let def = Number(prompt("Digite quantas derrotas você tem:"))

let rankPoints = calcularSaldoDeVitoria(vit,def)

function calcularSaldoDeVitoria(vit,def){
    return vit - def
}
if(rankPoints < 10){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de ferro`)
}else if(rankPoints <= 20){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de bronze`)
}else if(rankPoints <= 50){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de prata`)
}else if(rankPoints <= 80){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de ouro`)
}else if(rankPoints <= 90){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de diamante`)
}else if(rankPoints <= 100){
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de lendário`)
}else{
    console.log(`O Herói tem de saldo de ${rankPoints} está no nível de imortal`)
}