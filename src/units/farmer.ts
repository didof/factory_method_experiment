import generateRandomName from "../utility/generateRandomName.js";
import Unit from "./unit.js";

export default class Farmer extends Unit {
   static label = 'farmer';
   private constructor(
      hp: number,
      attack: number,
      defence: number,
   ) { super(generateRandomName(), { hp, attack, defence }); }

   public static hire(): Farmer {
      const unit = new Farmer(20, 8, 10);
      console.log(`${unit.name}, ${Farmer.label}, is here.`)
      return unit;
   }
}