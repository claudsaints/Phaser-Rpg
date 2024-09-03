import * as Phaser from "phaser";

import { CST } from "../../cst";

export default class TitleScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.scenes.title
        })

    }
    preload(){
        this.load.image('logo',CST.images.one);
        this.load.image('opt', CST.images.tone);
        this.load.image('play', CST.images.ttwo);
    }
    create(){
       

        const logo = this.add.image(this.game.renderer.width/5 , 2 , "logo").setOrigin(0).setDepth(0);

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play").setDepth(1);
        
        let optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100,"opt" ).setDepth(1);

        let hoverSprite: Phaser.GameObjects.Sprite = this.add.sprite(100, 100, CST.images.hsprite);

        /* 
            PointerEvents:
                pointerover - hovering
                pointerout - not hovering
                pointerup - click and release
                pointerdown - just click
        */

        playButton.setInteractive();

        playButton.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = playButton.x - playButton.width;
            hoverSprite.y = playButton.y;

        })

        playButton.on("pointerout", () => {
            hoverSprite.setVisible(false);
        })
        playButton.on("pointerup", () =>{
            this.scene.start(CST.scenes.dungeon);
        })

        // playButton.on("pointerup", () => {
        //     this.scene.start(CST.SCENES.PLAY);
        // })

        optionsButton.setInteractive();

        optionsButton.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = optionsButton.x - optionsButton.width;
            hoverSprite.y = optionsButton.y;

        })

        optionsButton.on("pointerout", () => {
            hoverSprite.setVisible(false);
        })

        optionsButton.on("pointerup", () => {
           
        })
    }

}


