export const loadSprites = (scene: Phaser.Scene): void => {
    // Essa função 'scene.load.spritesheet' é responsável por carregar os sprites na instância do Phaser.
    // Aqui iremos carregar a animação do personagem parado na tela.
    // O primeiro parâmetro 'player_idle' é o nome do índice que iremos dar a esse sprite carregado.
    // O segundo parâmetro é o caminho do sprite. Repare que aqui estamos utilizando a imagem que baixamos no passo anterior.
    scene.load.spritesheet("player_idle", "./assets/parado.png", {
      frameWidth: 32, // Largura do frame dessa animação
      frameHeight: 32, // altura do frame dessa animação
      spacing: 32, // O espaçamento em pixels entre um frame e outro. Se você abrir a imagem, vai reparar que os frames estão espaçados
    });
  
    // Essa função faz a mesma coisa que a de cima, porém carregando o sprite de 'caminhada' do personagem
    scene.load.spritesheet("player_walk", "./assets/rigth.png", {
      frameWidth: 32,
      frameHeight: 32,
      spacing: 32,
    });

    scene.load.spritesheet("player_idle2", "./assets/front.png", {
        frameWidth: 32, // Largura do frame dessa animação
        frameHeight: 32, // altura do frame dessa animação
        spacing: 32, // O espaçamento em pixels entre um frame e outro. Se você abrir a imagem, vai reparar que os frames estão espaçados
    });

    scene.load.spritesheet("player_idle3", "./assets/back.png", {
        frameWidth: 32, // Largura do frame dessa animação
        frameHeight: 32, // altura do frame dessa animação
        spacing: 32, // O espaçamento em pixels entre um frame e outro. Se você abrir a imagem, vai reparar que os frames estão espaçados
    });
  
    // Essa função faz a mesma coisa que a de cima, porém carregando o sprite de 'ataque' 
};

const createAnimations = (scene: Phaser.Scene): void => {
    // A função 'scene.anims.create' cria uma animação na instância do Phaser para podermos usar em qualquer momento do jogo.
    // Aqui iremos criar a animação do personagem parado
    scene.anims.create({
      key: "player_idle",
      frames: scene.anims.generateFrameNames("player_idle", {  // Aqui você informa qual sprite você está carregando. Nós configuramos esse nome na etapa anterior
        start: 0, // Em qual dos frames irá começar a executar a animação. Nesse caso escolhemos 0, mas poderia ser qualquer outro.
        end: 7, // Aqui em qual dos frames irá terminar a execução da animação.
      }),
      frameRate: 8, // Quantas frames serão apresentados por segundo. Aqui iremos exibir 8 frames por segundo.
      repeat: -1, // Quantas vezes a animação irá se repetir. Deixamos -1 para repetir infinitamente.
      yoyo: true, // Indica se a animação deve ser executada de traz pra frente também, como um yoyo, vai e volta.
    });
  
    // Faz a mesma coisa da função acima, mas cria a animação de 'caminhada'
    scene.anims.create({
      key: "player_walk",
      frames: scene.anims.generateFrameNames("player_walk", {
        start: 0,
        end: 6,
      }),
      frameRate: 8,
      repeat: -1,
    });
    scene.anims.create({
        key: "player_idle2",
        frames: scene.anims.generateFrameNames("player_idle2", {
          start: 0,
          end: 6,
        }),
        frameRate: 8,
        repeat: -1,
    });
    scene.anims.create({
        key: "player_idle3",
        frames: scene.anims.generateFrameNames("player_idle3", {
          start: 0,
          end: 6,
        }),
        frameRate: 8,
        repeat: -1,
    });
  
    // Faz a mesma coisa da função acima, mas cria a animação de 'ataque'
    
};

export const createPlayer = (scene: Phaser.Scene) => {
    // Essa função adiciona um elemento no jogo usando um sprite. O sprite que vamos usar aqui é o 'player_idle'
    const player = scene.physics.add.sprite(200, 200, "player_idle");
    // chamamos a função implementada anteriormente para criar todas as animações para nosso personagem
    createAnimations(scene);
    return player;
};