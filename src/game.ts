import { Collision } from "matter";
import * as Phaser from "phaser";
import { createAnimes } from "./player";
var ani_status = 'mr_idle_down'

export default class Demo extends Phaser.Scene {
  // player;
  // controls;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private mr_al!: Phaser.Physics.Arcade.Sprite;
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image('tiles','./assets/map/tileset_dungeon.png');
    this.load.tilemapTiledJSON('map','./assets/map/dungeon.json');
    this.load.atlas('mr_alfred','./assets/char/mr_alfred.png','./assets/char/mr_alfred2.json');
    this.cursors = this.input.keyboard.createCursorKeys();
    //mapa arquivos que contem, carregando primeiro....
    // this.load.image('tiles','./assets/map/grass.png');
    // this.load.image('tiles2','./assets/map/a.png');
    // this.load.tilemapTiledJSON('map','./assets/map/mapa.json');
    // loadSprites(this);
  }

  create() {
    // const map = this.make.tilemap({key: "map", tileWidth: 32, tileHeight: 32 });
    const map = this.make.tilemap({key : "map", tileWidth: 32, tileHeight: 32});
    // const tilesetGrass = map.addTilesetImage("WORLD","tiles");
    // const tilesetWater = map.addTilesetImage("new","tiles2");
    //construção do mapa
    const tilesetDun = map.addTilesetImage("cum","tiles");
    const gnd = map.createLayer('lum',tilesetDun,0,0);
    const gnd2 = map.createLayer('ldois',tilesetDun,0,0);
    const dd = map.createLayer('ltres',tilesetDun,0,0);
    const dd2 = map.createLayer('lquatro',tilesetDun,0,0);
    gnd.setCollisionByProperty({collides: true});
    // definiçôes de personagem
    this.mr_al = this.physics.add.sprite(128,128,'mr_alfred');
    createAnimes(this.anims);
    this.physics.add.collider(this.mr_al,gnd);
    this.cameras.main.startFollow(this.mr_al, true);
  }

  update(t: number, dt: number) {
    if(!this.cursors || !this.mr_al){
      return
    }
    const speed = 100;
    if (this.cursors.left?.isDown){
      ani_status = 'mr_idle_sides'
      this.mr_al.anims.play('mr_run_sides',true);
      this.mr_al.setVelocity(-speed,0);
      this.mr_al.scale = 1;
      
    }else if (this.cursors.right?.isDown){
      ani_status = 'mr_idle_sides'
      this.mr_al.anims.play('mr_run_sides',true);
      this.mr_al.setVelocity(speed,0);
      this.mr_al.scaleX = -1;
    }else if (this.cursors.up?.isDown){
      ani_status = 'mr_idle_up'
      this.mr_al.anims.play('mr_run_up',true);
      this.mr_al.setVelocity(0,-speed);

    }else if (this.cursors.down?.isDown){
      ani_status = 'mr_idle_down'
      this.mr_al.anims.play('mr_run_down',true);
      this.mr_al.setVelocity(0,speed);
    }else{
      this.mr_al.play(ani_status);
      this.mr_al.setVelocity(0,0);
    }

  }
}


const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 800,
  scene: Demo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    zoom: 1
  }
};

const game = new Phaser.Game(config);
