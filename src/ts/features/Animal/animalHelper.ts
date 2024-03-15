import Animal from "./Animal";
import { Elephant } from "./Elephant/Elephant";
import { Tiger } from "./Tiger/Tiger";
import { Zebra } from "./Zebra/Zebra";
import { Animals } from "./animal.type";

export const getRandomAnimal = (): Animal => {
    const animals = Object.values(Animals);
    const randomIdx = Math.floor(Math.random() * animals.length);
    const animal = animals[randomIdx];
    
    switch (animals[randomIdx]) {
      case Animals.ZEBRA:
        return new Zebra(animal, 1, 5, "Africa");
  
      case Animals.ELEPHANT:
        return new Elephant(animal, 2, "Africa", 400);
  
      case Animals.TIGER:
        return new Tiger(animal, 3, "South America");
    }
  };
  