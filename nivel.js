let personagem = []
const nome = prompt("Digite o nome do seu personagem:")
const xp = prompt("Digite quanto xp ele tem:")

personagem.push({
    nome: nome,
    xp: Number(xp)
})

if(xp <= 1000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível ferro com "+ personagem[0].xp+ " de xp")
}else if(xp > 1000 && xp <= 2000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível bronze com "+ personagem[0].xp+ " de xp")
}else if(xp > 2000 && xp <= 5000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível prata com "+ personagem[0].xp+ " de xp")
}else if(xp > 5000 && xp <= 7000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível ouro com "+ personagem[0].xp+ " de xp")
}else if(xp > 7000 && xp <= 8000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível platina com "+ personagem[0].xp+ " de xp")
}else if(xp > 8000 && xp <= 9000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível Ascendente com "+ personagem[0].xp+ " de xp")
}else if(xp > 9000 && xp <= 10000){
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível Imortal com "+ personagem[0].xp+ " de xp")
}else{
    alert("O Herói de nome "+personagem[0].nome+" está no rank de nível Radiante com "+ personagem[0].xp+ " de xp")
}
