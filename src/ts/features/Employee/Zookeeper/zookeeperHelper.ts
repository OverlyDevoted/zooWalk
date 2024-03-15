import { uniqueNamesGenerator, names } from "unique-names-generator";
import Zookeeper from "./Zookeeper";
import { Gender } from "../../Animal/animal.type";
import { EmployeeIcons } from "../employee.type";

export const getRandomZookeeper = (): Zookeeper => {
  const zookeeper = new Zookeeper({
    name: uniqueNamesGenerator({
      dictionaries: [names, names],
      separator: " ",
    }),
    gender: Gender.FEMALE,
    icon: EmployeeIcons[Math.floor(Math.random() * EmployeeIcons.length)],
  });
  return zookeeper;
};
