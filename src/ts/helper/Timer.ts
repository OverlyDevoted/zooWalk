import GameObject from "../features/Game/GameObject";
import Observer from "./Observer";

class Timer extends GameObject {
  private currentTime;
  observer: Observer<null, "finish">;
  constructor(private duration: number) {
    super();
    this.currentTime = duration;
    this.observer = new Observer();
  }
  override start(): void {
    console.log(this.duration);
  }
  override update(deltaT: number): void {
    if (this.currentTime < this.duration) {
      this.currentTime += deltaT;
    } else {
      this.observer.call("finish", null);
      this.currentTime = 0;
    }
  }
}

export default Timer;
