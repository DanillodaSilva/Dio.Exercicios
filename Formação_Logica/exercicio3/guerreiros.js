class Guerreiro {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "mago"){
            console.log("mago atacou usando magias");
        } else if(this.tipo === "monge"){
            console.log("monge atacou usando artes marciais");
        } else if(this.tipo === "guerreiro"){
            console.log("guerreiro atacou usando espadas");
        } else if(this.tipo === "ninja"){
            console.log("ninja atacou usando shurikens");
        }
    }
}

const nomez = prompt("Digite o seu nome:");
const idadez = prompt("Digite a sua idade:");

let magoGuerreiro = new Guerreiro(nomez, idadez, "mago");
let mongeGuerreiro = new Guerreiro(nomez, idadez, "monge");
let ninjaGuerreiro = new Guerreiro(nomez, idadez, "ninja");
let guerreiro = new Guerreiro(nomez, idadez, "guerreiro");

magoGuerreiro.atacar();
mongeGuerreiro.atacar();
ninjaGuerreiro.atacar();
guerreiro.atacar();