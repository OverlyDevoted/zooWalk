import { Icons } from "../../types/helpers.type";


export type AnimalOrigins = "Africa" | "Asia" | "South America";

export type AnimalInfo = Icons<Animals> & { origins: AnimalOrigins };
export enum Gender {
  FEMALE = "♀",
  MALE = "♂",
}
export enum Animals {
    ZEBRA = "🦓",
    TIGER = "🐯",
    ELEPHANT = "🐘"
}