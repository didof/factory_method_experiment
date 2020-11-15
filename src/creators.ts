import Farmer from './units/farmer.js';
import Swordman from './units/swordman.js';
import Unit from './units/unit.js';

export default abstract class Creator {
   public abstract factoryMethod(): Unit

   public newUnit(): Unit {
      const unit = this.factoryMethod();
      return unit;
   }
}

export class FarmerCreator extends Creator {
   public factoryMethod(): Unit {
      return Farmer.hire();
   }
}

export class SwordmanCreator extends Creator {
   public factoryMethod(): Unit {
      const unit = Swordman.hire();
      return unit;
   }
}