import Observer from "../../helper/Observer";
type ObserverTypes = "start" | "update";
class GameLoop {
  private static instance: GameLoop | null = null;
  private observer: Observer<number, ObserverTypes>;
  private lastTimeStamp: number;
  private deltaT: number;
  constructor() {
    this.update = this.update.bind(this);
    this.lastTimeStamp = 0;
    this.deltaT = 0;
    this.observer = new Observer();
    this.start();
  }

  static getInstance() {
    if (this.instance === null) {
      this.instance = new GameLoop();
    }
    return this.instance;
  }
  private start() {
    this.observer.call("start", this.deltaT);
    this.update();
  }
  private update() {
    if (this.lastTimeStamp != 0) {
      this.deltaT = +(performance.now() / 1000 - this.lastTimeStamp).toFixed(4);
    }
    this.lastTimeStamp = performance.now() / 1000;
    this.observer.call("update", this.deltaT);
    window.requestAnimationFrame(this.update);
  }
  addEventListener(type: ObserverTypes, fn: (arg: number) => void) {
    this.observer.addEventListener(type, fn);
  }
}

export default GameLoop;
