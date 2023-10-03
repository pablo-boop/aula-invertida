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
        return this.gameList.push(param)
    }

    delete(id) {
        this.gameList = this.gameList.filter((game) => game.id !== id);
    }
}