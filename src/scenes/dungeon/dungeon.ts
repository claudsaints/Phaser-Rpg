import * as Phaser from "phaser";
import { CST } from "../../cst";
import { Collision } from "matter";
import { createAnimes } from "../../player";
import { controls } from "../../controls";



export default class DungeonScene extends Phaser.Scene {
  // player;
  // controls;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private mr_al!: Phaser.Physics.Arcade.Sprite;
  ani_status = "";
  constructor() {
    super({
        key: CST.scenes.dungeon
    });
  }

  preload() {
    this.load.image('tiles','./assets/map/tileset_dungeon.png');
    this.load.tilemapTiledJSON('map','./assets/map/dungeon.json');
    this.load.atlas('mr_alfred','./assets/char/mr_alfred.png','./assets/char/mr_alfred2.json');
    this.cursors = this.input.keyboard.createCursorKeys();
    //mapa arquivos que contem, carregando primeiro....
  }

  create() {
    
    // const map = this.make.tilemap({key: "map", tileWidth: 32, tileHeight: 32 });
    const map = this.make.tilemap({key : "map", tileWidth: 32, tileHeight: 32});
    //construção do mapa
    const tilesetDun = map.addTilesetImage("cum","tiles");
    const gnd = map.createLayer('lum',tilesetDun,0,0);
    const gnd2 = map.createLayer('ldois',tilesetDun,0,0);
    const dd = map.createLayer('ltres',tilesetDun,0,0);
    const dd2 = map.createLayer('lquatro',tilesetDun,0,0);
    gnd.setCollisionByProperty({collides: true});
    dd2.setCollisionByProperty({collides: true});
    // dd2.setSize(dd2.width = 20, dd2.height = 20)
    // definiçôes de personagem
    this.mr_al = this.physics.add.sprite(128,128,'mr_alfred');
    //box 
    this.mr_al.body.setSize(this.mr_al.width = 20 , this.mr_al.height = 24)
    this.mr_al.setOffset(5 , 3)
    createAnimes(this.anims);
    //colisão
    this.physics.add.collider(this.mr_al,[gnd,dd2]);
    this.cameras.main.startFollow(this.mr_al, true);
  }

  update(t: number, dt: number) {
    controls(this.cursors,this.mr_al,this.ani_status);
  }
}


