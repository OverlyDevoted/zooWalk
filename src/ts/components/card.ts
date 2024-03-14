import Animal from "../features/Animal/Animal";
import { Gender } from "../features/Animal/animal.type";

export const generateAnimalCard = (animal: Animal): HTMLElement => {
  const wrapper = document.createElement("section");
  const info = document.createElement("div");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gender, icon, name, origins } = animal.getInfo();

  const iconEl = document.createElement("span");
  iconEl.textContent = icon;
  const genderEl = document.createElement("span");
  genderEl.textContent = gender;
  if (gender == Gender.FEMALE) genderEl.classList.add("female");
  else genderEl.classList.add("male");

  info.append(iconEl, genderEl);
  wrapper.append(info);
  wrapper.classList.add("card");
  return wrapper;
};
