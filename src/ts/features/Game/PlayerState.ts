import Observer from "../../helper/Observer";
class PlayerState {
  private startingMoney = 1000;
  private currentMoney;
  moneyChangeObserver: Observer<number, "change">;
  constructor() {
    this.moneyChangeObserver = new Observer();
    this.currentMoney = this.startingMoney;
  }
  changeMoney(amount: number): number {
    if (amount < 0) {
      if (Math.abs(amount) > this.currentMoney)
        throw new Error("Cannot spend more money than the player has.");
    }
    this.currentMoney += amount;
    this.moneyChangeObserver.call("change", this.currentMoney);
    return this.currentMoney;
  }
  start() {
    this.changeMoney(0);
  }
}

export default PlayerState;
