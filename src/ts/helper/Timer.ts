import GameObject from "../features/Game/GameObject";
import Observer from "./Observer";

class Timer extends GameObject {
  private currentTime;
  observer: Observer<null, "finish">;
  private isStarted: boolean;
  constructor(
    private duration: number,
    private triggerFirst?: boolean,
    private looping?: boolean,
    private autoStart?: boolean
  ) {
    super();
    this.observer = new Observer();
    this.currentTime = 0;
    this.isStarted = false;
  }
  override start(): void {
    this.isStarted = true;
  }
  override update(deltaT: number): void {
    if (!this.isStarted) return;
    if (this.currentTime < this.duration) {
      this.currentTime += deltaT;
    } else {
      this.isStarted = false;
      this.currentTime = 0;
      this.observer.call("finish", null);
    }
  }
}

export default Timer;
