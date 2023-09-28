export class Game {
    constructor(nome, genero, preco, criador) {
        this.id = this.generateId;
        this.nome = nome;
        this.genero = genero;
        this.preco = preco;
        this.criador = criador;
    }

    generateId() {
        return Math.floor(Math.random() * 1000)
    }
}

export class GameList {
    constructor() {
        this.gameList = [];
    }

    emptyInputs() {
        if(gameName == '' && gameGender == '' && gamePrice == '' && gameCriator == '') {
            return true
        } else {
            return false
        }
    }

    add(param) {
        if(this.emptyInputs(param)) {
            alert("Erro")
        } else {
            this.gameList.push(param)
        }
    }
}