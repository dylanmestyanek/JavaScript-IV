/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
class GameObject{
    constructor(gameAttrs){
      this.createdAt = gameAttrs.createdAt;
      this.name = gameAttrs.name;
      this.dimensions = gameAttrs.dimensions;
    }
  
    destroy(){
      return `${this.name} was removed from the game.`    
    }
  }
  
  class CharacterStats extends GameObject{
    constructor(statAttrs){
      super(statAttrs);
      this.healthPoints = statAttrs.healthPoints;
    }
  
    takeDamage(){
      return `${this.name} took damage.`
    }
  }
  
  class Humanoid extends CharacterStats{
    constructor(humanoidAttrs){
      super(humanoidAttrs);
      this.team = humanoidAttrs.team;
      this.weapons = humanoidAttrs.weapons;
      this.language = humanoidAttrs.language;
    }
  
    greet(){
      return `${this.name} offers a greeting in ${this.language}`
    }
  }
  
  class Villain extends Humanoid{
    constructor(villainAttrs){
      super(villainAttrs);
    }
  
    damageOpponent(enemy){
      enemy.healthPoints--;
      console.log(`${this.name} attacked ${enemy.name} with a quick slash! ${enemy.name}'s health is now at ${enemy.healthPoints} points!`);
    }
  }
  
  class Hero extends Humanoid{
    constructor(heroAttrs){
      super(heroAttrs)
    }
  
    damageEnemy(enemy){
      enemy.healthPoints -= 2;
      console.log(`${this.name} surges ${enemy.name} with force, and attacks them for 2 damage! ${enemy.name}'s health is now at ${enemy.healthPoints}.`);
    }
  }
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const villain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 40,
        width: 20,
        height: 60
      },
      healthPoints: 100,
      name: 'Evil Man',
      team: 'The Sinners',
      weapons: [
        'Mace of Malice',
        'Hammer of Doom'
      ],
      language: 'Devilish'
    })
  
     const savior = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 50,
        width: 10,
        height: 80
      },
      healthPoints: 120,
      name: 'Mr. Man',
      team: 'The Justice',
      weapons: [
        'Sword of Righteousness',
        'Shield of Strength'
      ],
      language: 'Humanish'
    })
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(villain.damageOpponent(archer))
    console.log(villain.damageOpponent(archer))
    console.log(savior.damageEnemy(villain))
  