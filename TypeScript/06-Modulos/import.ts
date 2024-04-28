import { SpaceShip } from "./exports.js";

interface BattleSpaceship extends SpaceShip {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: 'X-Wing',
  pilot: "Luke",
  weapons: 10
}