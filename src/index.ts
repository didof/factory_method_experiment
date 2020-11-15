import Creator, { FarmerCreator, SwordmanCreator } from "./creators.js";
import Unit from "./units/unit.js";

function generateUnit(creator: Creator): Unit {
   const unit = creator.newUnit();
   return unit;
}

const farmer1 = generateUnit(new FarmerCreator());
const swordman1 = generateUnit(new SwordmanCreator());

farmer1.info
swordman1.info

swordman1.attack(farmer1);
farmer1.info
swordman1.attack(farmer1);
swordman1.attack(farmer1);
swordman1.attack(farmer1);
farmer1.info
