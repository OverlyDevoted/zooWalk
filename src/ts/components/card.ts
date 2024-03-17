import Animal from "../features/Animal/Animal";
import { Gender } from "../features/Animal/animal.type";
import Employee from "../features/Employee/Employee";
import { Food } from "../features/Food/Food";
import Shop from "../features/Shop/Shop";
import { BuyCallback } from "../features/Shop/shop.type";

export const generateAnimalCards = (
  animals: Animal[],
  buyCallback: BuyCallback
): HTMLElement[] => {
  const cards: HTMLElement[] = [];
  animals.forEach((animal) => {
    const wrapper = document.createElement("section");
    const info = document.createElement("div");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gender, icon, name, origins } = animal.getInfo();

    const genderEl = document.createElement("span");
    genderEl.textContent = gender;
    if (gender == Gender.FEMALE) genderEl.classList.add("female");
    else genderEl.classList.add("male");
    const price = Shop.getInstance().getRandomPrice();
    info.append(
      getIconElement(icon),
      genderEl,
      getPriceElement(price),
      getBuyElement(() => {
        buyCallback({ item: animal, price: -price });
        wrapper.remove();
      })
    );
    wrapper.append(info);
    wrapper.classList.add("card");
    cards.push(wrapper);
  });
  return cards;
};

export const generateFoodCards = (
  foods: Food[],
  buyCallback: BuyCallback
): HTMLElement[] => {
  const cards: HTMLElement[] = [];
  foods.forEach((food) => {
    const wrapper = document.createElement("section");
    const info = document.createElement("div");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { icon, name, price, calories } = food;

    info.append(
      getIconElement(icon),
      getPriceElement(price),
      getBuyElement(() => {
        buyCallback({ item: food, price: -price });
        wrapper.remove();
      })
    );
    wrapper.append(info);
    wrapper.classList.add("card");
    cards.push(wrapper);
  });
  return cards;
};

export const generateEmployeeCards = (
  employees: Employee[],
  buyCallback: BuyCallback
): HTMLElement[] => {
  const cards: HTMLElement[] = [];
  employees.forEach((employee) => {
    const wrapper = document.createElement("section");
    const info = document.createElement("div");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, gender, icon } = employee.info;

    const nameEl = document.createElement("span");
    nameEl.textContent = name;
    const price = Shop.getInstance().getRandomPrice();
    info.append(
      getIconElement(icon),
      nameEl,
      getPriceElement(price),
      getBuyElement(() => {
        buyCallback({ item: employee, price: -price });
        wrapper.remove();
      })
    );
    wrapper.append(info);
    wrapper.classList.add("card");
    cards.push(wrapper);
  });
  return cards;
};
const getIconElement = (icon: string): HTMLElement => {
  const iconEl = document.createElement("span");
  iconEl.textContent = icon;
  iconEl.classList.add("icon");
  return iconEl;
};
const getPriceElement = (price: number): HTMLElement => {
  const priceEl = document.createElement("span");
  priceEl.textContent = `${price} 💰`;
  return priceEl;
};
const getBuyElement = (fn: (e?: Event) => void) => {
  const buyEl = document.createElement("button");
  buyEl.textContent = "BUY";
  buyEl.setAttribute("class", "btn buy-btn");
  buyEl.addEventListener("click", fn);
  return buyEl;
};
