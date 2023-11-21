import { Card } from "./types";
import { Message, Employee, Equipment, Importance } from "./types";



export class Item implements Card {

  Date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

  Importance = Importance[Math.floor(Math.random() * Importance.length)];

  Equipment = Equipment[Math.floor(Math.random() * Equipment.length)];

  Message = Message[Math.floor(Math.random() * Message.length)];

  Employee = Employee[Math.floor(Math.random() * Employee.length)]
}

export const eventArray: Card[] = [
];

for (let i: number = 0; i < 1000; i++) {
  eventArray[i] = new Item();
}







