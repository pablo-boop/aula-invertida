export class Game {
    constructor(nome, categoria, preco, criador) {
        this.id = this.generateId();
        this.nome = nome;
        this.categoria = categoria;
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

    add(param) {
        this.gameList.push(param)
        console.log(this.gameList);
    }

    edit(id) {

    }

    delete(id) {

    }
}