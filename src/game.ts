import * as Phaser from "phaser";
import TitleScene from "./scenes/title/title";
import DungeonScene from "./scenes/dungeon/dungeon";

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: [TitleScene, DungeonScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 0 }
    },
  },
  scale: {
    zoom: 1
  }
};

const game = new Phaser.Game(config);
