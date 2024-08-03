
export const controls = (cursors,mr_al,ani_status) => {
    if(!cursors || !mr_al){
        return
    }
    const speed = 100;
    const speedDiag = speed * (1/1.44);
    //diagonal movement...
    if (cursors.down?.isDown && cursors.right?.isDown){
        ani_status = 'mr_idle_down'
        mr_al.anims.play('mr_run_down',true);
        mr_al.body.setVelocityX(speedDiag);
        mr_al.body.setVelocityY(speedDiag);
    }else if(cursors.down?.isDown && cursors.left?.isDown){
        ani_status = 'mr_idle_down'
        mr_al.anims.play('mr_run_down',true);
        mr_al.body.setVelocityX(-speedDiag);
        mr_al.body.setVelocityY(speedDiag);
    }else if(cursors.up?.isDown && cursors.left?.isDown){ 
        ani_status = 'mr_idle_up'
        mr_al.anims.play('mr_run_up',true);
        mr_al.body.setVelocityX(-speedDiag);
        mr_al.body.setVelocityY(-speedDiag);
    }else if(cursors.up?.isDown && cursors.right?.isDown){
        ani_status = 'mr_idle_up'
        mr_al.anims.play('mr_run_up',true);
        mr_al.body.setVelocityX(speedDiag);
        mr_al.body.setVelocityY(-speedDiag);
        
    }else if (cursors.left?.isDown){
        ani_status = 'mr_idle_sides'
        mr_al.anims.play('mr_run_sides',true);
        mr_al.setVelocity(-speed,0);
        mr_al.flipX= false;
    
    }else if (cursors.right?.isDown){
        ani_status = 'mr_idle_sides'
        mr_al.anims.play('mr_run_sides',true);
        mr_al.setVelocity(speed,0);
        mr_al.flipX = true;
    }else if (cursors.up?.isDown){
        ani_status = 'mr_idle_up'
        mr_al.anims.play('mr_run_up',true);
        mr_al.setVelocity(0,-speed);

    }else if (cursors.down?.isDown){
        ani_status = 'mr_idle_down'
        mr_al.anims.play('mr_run_down',true);
        mr_al.setVelocity(0,speed);
    }else{
        mr_al.play(ani_status);
        mr_al.setVelocity(0,0);
    } 
}