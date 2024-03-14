import GameLoop from "./GameLoop";

abstract class GameObject {
    constructor() {
        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        const gameLoop = GameLoop.getInstance();
        gameLoop.addEventListener("start", this.start);
        gameLoop.addEventListener("update", this.update);
    }
    abstract start(): void;
    abstract update(deltaT: number): void;
}

export default GameObject;