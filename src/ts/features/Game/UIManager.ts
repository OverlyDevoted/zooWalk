import {
  generateAnimalCards,
  generateFoodCards,
  generateEmployeeCards,
} from "../../components/card";
import Shop from "../Shop/Shop";
import { BuyCallback } from "../Shop/shop.type";

export enum ValueFields {
  ANIMAL,
  MONEY,
  ZOOKEEPER,
  APPEAL,
}
class UIManager {
  //game info values
  private appealValueLabel: HTMLElement;
  private moneyValueLabel: HTMLElement;
  private zookeeperValueLabel: HTMLElement;
  private animalsValueLabel: HTMLElement;

  //shop containers

  private animalShopContainer: HTMLElement;
  private employeeShopContainer: HTMLElement;
  private foodShopContainer: HTMLElement;

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

    this.animalShopContainer = document.getElementById(
      "animal-shop"
    ) as HTMLElement;
    this.employeeShopContainer = document.getElementById(
      "employee-shop"
    ) as HTMLElement;
    this.foodShopContainer = document.getElementById(
      "food-shop"
    ) as HTMLElement;

    this.shopSideMenu();
  }
  changeUIValue(field: ValueFields): (amount: number) => void {
    let fieldToChange: HTMLElement;
    switch (field) {
      case ValueFields.ANIMAL:
        fieldToChange = this.animalsValueLabel;
        break;
      case ValueFields.APPEAL:
        fieldToChange = this.appealValueLabel;
        break;
      case ValueFields.MONEY:
        fieldToChange = this.moneyValueLabel;
        break;
      case ValueFields.ZOOKEEPER:
        fieldToChange = this.zookeeperValueLabel;
        break;
    }
    return (amount: number): void => {
      fieldToChange.textContent = amount.toString();
    };
  }
  shopSideMenu() {
    const shopWrapper = document.getElementById("shop-wrapper") as HTMLElement;
    const shopExpandBtn = document.getElementById(
      "shop-expand-btn"
    ) as HTMLButtonElement;
    shopExpandBtn.addEventListener("click", () => {
      shopWrapper.classList.toggle("hide");
      shopExpandBtn.classList.toggle("rotate");
    });
  }

  newShop(shop: Shop, buyCallback: BuyCallback) {
    this.animalShopContainer.innerHTML = "";
    this.employeeShopContainer.innerHTML = "";
    this.foodShopContainer.innerHTML = "";

    this.animalShopContainer.append(
      ...generateAnimalCards(shop.generateNewAnimals(), buyCallback)
    );
    this.foodShopContainer.append(
      ...generateFoodCards(shop.generateNewFood(), buyCallback)
    );
    this.employeeShopContainer.append(
      ...generateEmployeeCards(shop.generateNewEmployeees(), buyCallback)
    );
  }
}

export default UIManager;
