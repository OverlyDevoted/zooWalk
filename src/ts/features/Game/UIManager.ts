class UIManager {
  private appealValueLabel: HTMLElement;
  private moneyValueLabel: HTMLElement;
  private zookeeperValueLabel: HTMLElement;
  private animalsValueLabel: HTMLElement;
  constructor() {
    this.animalsValueLabel = document.getElementById(
      "animal-value"
    ) as HTMLElement;
    this.moneyValueLabel = document.getElementById(
      "money-value"
    ) as HTMLElement;
    this.zookeeperValueLabel = document.getElementById(
      "zookeeper-value"
    ) as HTMLElement;
    this.appealValueLabel = document.getElementById(
      "appeal-value"
    ) as HTMLElement;
  }
}
export default UIManager;
