const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shildPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shildPts = shildPts;
    this.stance = "atacando";
  }

  attack(targetCharacter) {
    if (this.stance === "atacando") {
      super.attack(targetCharacter);
    }
  }
  switchStance() {
    if (this.stance === "atacando") {
      this.stance = "defendendo";
      this.defensePts += this.shieldPts;
    } else {
      this.stance = "atacando";
      this.defensePts -= this.shieldPts;
    }
  }
}

module.exports = Warrior;
