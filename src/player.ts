import * as Phaser from "phaser";

export const createAnimes = (anims: Phaser.Animations.AnimationManager) => {
  //define um unico frame, utilizado para idle (personagem parado).
  anims.create({
    key: 'mr_idle_down',
    frames: [{key: 'mr_alfred' , frame: 'front-0'}]
  })
  anims.create({
    key: 'mr_idle_up',
    frames: [{key: 'mr_alfred' , frame: 'back-0'}]
  })
  anims.create({
    key: 'mr_idle_sides',
    frames: [{key: 'mr_alfred' , frame: 'lr-0'}]
  })
  // cria a animação baseado nos frames do json. define um prefix que é o nome padrão do frame e vai se alterando com base no start e end...
  anims.create({
    key: 'mr_run_down',
    frames: anims.generateFrameNames('mr_alfred',{start: 0, end: 5, prefix: 'front-'}),
    repeat: -1,
    frameRate: 12
  })
  anims.create({
    key: 'mr_run_up',
    frames: anims.generateFrameNames('mr_alfred',{start: 0, end: 5, prefix: 'back-'}),
    repeat: -1,
    frameRate: 12
  })
  anims.create({
    key: 'mr_run_sides',
    frames: anims.generateFrameNames('mr_alfred',{start: 0, end: 5, prefix: 'lr-'}),
    repeat: -1,
    frameRate: 12
  })
}

