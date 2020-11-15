export default abstract class Unit {
   private enemiesDefeated: number;

   constructor(
      protected name: string,
      protected stats: Stats
   ) {
      this.enemiesDefeated = 0;
   }

   public get info() {
      console.log(this.name, this.stats);
      return { name, ...this.stats }
   }

   public get killCount() {
      return this.enemiesDefeated;
   }

   public getAttacked(enemyAttack: number): boolean {
      if (enemyAttack > this.stats.defence) {
         this.stats.hp -= enemyAttack - this.stats.defence;
      } else {
         this.stats.hp -= this.stats.defence - enemyAttack;
      }
      return this.isDead();
   }

   public attack(unit: Unit): void {
      console.log(`${this.name} is attacking ${unit.name}`);
      const outcome = unit.getAttacked(this.stats.attack);
      if (outcome) this.enemiesDefeated++;
   }

   private isDead(): boolean {
      if (this.stats.hp > 0) return false;
      else {
         this.dismiss();
         return true;
      }
   }

   dismiss(): void {
      this.stats.hp = 0;
      console.log(`${this.name} is dead.`)
      // call supervisor (toDo) and remove this unit.
   };
}

interface Stats {
   hp: number,
   attack: number,
   defence: number,
}