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
    this.load.image('border','./assets/map/water.png');
    this.load.tilemapTiledJSON('map','./assets/map/mapa1.json');
    loadSprites(this);
  }

  create() {
    const map = this.make.tilemap({key: 'map'});
    const tilesetGrass = map.addTilesetImage('grass','tiles');
    const tilesetWater = map.addTilesetImage('water','border');

    const ground = map.createLayer('grass',tilesetGrass, 0, 0);
    const water = map.createLayer('water',tilesetWater, 0, 0);

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
  width: 250,
  height: 250,
  scene: Demo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
