import GameObject from "./GameObject";
import { Callback } from "../../types/helpers.type";
import Timer from "../../helper/Timer";
class GameManager extends GameObject {
  dayDuration: number = 1 * 60;
  dayTimer: Timer;
  newDayFn: Callback[] = [];
  constructor() {
    super();
    this.dayTimer = new Timer(this.dayDuration);
  }
  override start(): void {}
  addOnNewDay(fn: () => void) {
    this.dayTimer.observer.addEventListener("finish", fn);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override update(deltaT: number): void {}
}

export default GameManager;
