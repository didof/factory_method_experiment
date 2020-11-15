import Unit from "./unit.js";
import generateRandomName from "../utility/generateRandomName.js";

export default class Swordman extends Unit {

   static label = 'swordman';
   private constructor(
      hp: number,
      attack: number,
      defence: number,
   ) { super(generateRandomName(), { hp, attack, defence }); }

   public static hire(): Swordman {
      const unit = new Swordman(70, 16, 14);
      console.log(`${unit.name}, ${Swordman.label}, is here.`)
      return unit;
   }
}