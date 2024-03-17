import GameObject from "./GameObject";
import { Callback } from "../../types/helpers.type";
import Timer from "../../helper/Timer";
import UIManager, { ValueFields } from "./UIManager";
import PlayerState from "./PlayerState";
import Shop from "../Shop/Shop";
import Zoo from "../Zoo/Zoo";
import { BuyItem } from "../Shop/shop.type";
class GameManager extends GameObject {
  dayDuration: number;
  dayTimer: Timer;
  newDayFn: Callback[] = [];
  uiManager: UIManager;
  playerState: PlayerState;
  shop: Shop;
  zoo: Zoo;

  constructor(dayInMinutes: number) {
    super();
    this.dayDuration = dayInMinutes * 60;
    this.dayTimer = new Timer(this.dayDuration);

    this.zoo = new Zoo();
    this.shop = Shop.getInstance();
    this.uiManager = new UIManager();
    this.playerState = new PlayerState();

    this.playerState.moneyChangeObserver.addEventListener(
      "change",
      this.uiManager.changeUIValue(ValueFields.MONEY)
    );
    this.playerState.start();

    this.addOnNewDay(() => {
      this.uiManager.newShop(this.shop, (item: BuyItem) => {
        try {
          this.playerState.changeMoney(item.price)
          this.zoo.addItem(item.item);
        }
        catch(e) {
          console.log(e);
        }
      });
    });
  }
  override start(): void {}
  addOnNewDay(fn: () => void) {
    this.dayTimer.observer.addEventListener("finish", fn);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override update(deltaT: number): void {}
  startDay() {
    console.log("start day");
    this.dayTimer.start();
  }
}

export default GameManager;
