import Animal from "../features/Animal/Animal";
import { Gender } from "../features/Animal/animal.type";
import Employee from "../features/Employee/Employee";
import { Food } from "../features/Food/Food";
import { getRandomPrice } from "../features/Shop/Shop";

export const generateAnimalCard = (animal: Animal): HTMLElement => {
  const wrapper = document.createElement("section");
  const info = document.createElement("div");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gender, icon, name, origins } = animal.getInfo();

  const genderEl = document.createElement("span");
  genderEl.textContent = gender;
  if (gender == Gender.FEMALE) genderEl.classList.add("female");
  else genderEl.classList.add("male");

  info.append(getIcon(icon), genderEl, getPrice(getRandomPrice()));
  wrapper.append(info);
  wrapper.classList.add("card");
  return wrapper;
};

export const generateFoodCard = (food: Food): HTMLElement => {
  const wrapper = document.createElement("section");
  const info = document.createElement("div");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { icon, name, price, calories } = food;

  info.append(getIcon(icon), getPrice(price));
  wrapper.append(info);
  wrapper.classList.add("card");
  return wrapper;
};

export const generateEmployeeCard = (employee: Employee): HTMLElement => {
  const wrapper = document.createElement("section");
  const info = document.createElement("div");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, gender, icon } = employee.info;

  const nameEl = document.createElement("span");
  nameEl.textContent = name;

  info.append(getIcon(icon), nameEl, getPrice(getRandomPrice()));
  wrapper.append(info);
  wrapper.classList.add("card");
  return wrapper;
};
const getIcon = (icon: string): HTMLElement => {
  const iconEl = document.createElement("span");
  iconEl.textContent = icon;
  iconEl.classList.add("icon");
  return iconEl;
};
const getPrice = (price: number): HTMLElement => {
  const priceEl = document.createElement("span");
  priceEl.textContent = `${price} 💰`;
  return priceEl;
};
