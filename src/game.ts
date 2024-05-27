import * as Phaser from "phaser";
import { createPlayer, loadSprites } from "./player";
import { createControls, configControls } from "./controls";

export default class Demo extends Phaser.Scene {
  player;
  controls;

  constructor() {
    super("demo");
  }

  preload() {
    //mapa arquivos que contem, carregando primeiro....
    this.load.image('tiles','./assets/map/grass.png');
    this.load.image('tiles2','./assets/map/a.png');
    this.load.tilemapTiledJSON('map','./assets/map/mapa.json');
    loadSprites(this);
  }

  create() {
    const map = this.make.tilemap({key: "map", tileWidth: 32, tileHeight: 32 });

    const tilesetGrass = map.addTilesetImage("WORLD","tiles");
    const tilesetWater = map.addTilesetImage("new","tiles2");

    const ground = map.createLayer('ground',[tilesetGrass,tilesetWater], 0, 0);
    const www = map.createLayer('top',tilesetGrass, 0, 0);

    this.player = createPlayer(this);
    this.player.anims.play("player_idle",true);
    this.controls = createControls(this);
    
  }

  update() {
    configControls(this.player, this.controls, this);
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 640,
  height: 640,
  scene: Demo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
