import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    mc: GameObjects.Image;
    enemy: GameObjects.Image;
    menu: GameObjects.Image;
    sub_menu: GameObjects.Image;

    // logoTween: Phaser.Tweens.Tween | null;

    constructor ()
    {
        super('MainMenu');
    }

    preload(){

        this.load.setPath('assets/images');
        
        this.load.image('battle_background', 'battle_background.png');
        this.load.image('mc', 'mc_gambler.png');
        this.load.image('menu', 'main_control_menu.png');
        this.load.image('sub_menu', 'menu_action_box.png');
        this.load.image('slime', 'slime.png');
    }

    create ()
    {
        this.background = this.add.image(640, 320, 'battle_background');
        this.mc = this.add.image(250, 320, 'mc').setScale(0.7);
        this.enemy = this.add.image(1050, 380, 'slime'); 
        this.menu = this.add.image(640, 530, 'menu');
        // this.sub_menu = this.add.image(640, 480, 'sub_menu');

        // this.title = this.add.text(512, 460, 'Main Menu', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }
    
    // changeScene ()
    // {
    //     if (this.logoTween)
    //     {
    //         this.logoTween.stop();
    //         this.logoTween = null;
    //     }

    //     this.scene.start('Game');
    // }

    // moveLogo (reactCallback: ({ x, y }: { x: number, y: number }) => void)
    // {
    //     if (this.logoTween)
    //     {
    //         if (this.logoTween.isPlaying())
    //         {
    //             this.logoTween.pause();
    //         }
    //         else
    //         {
    //             this.logoTween.play();
    //         }
    //     } 
    //     else
    //     {
    //         this.logoTween = this.tweens.add({
    //             targets: this.logo,
    //             x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
    //             y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
    //             yoyo: true,
    //             repeat: -1,
    //             onUpdate: () => {
    //                 if (reactCallback)
    //                 {
    //                     reactCallback({
    //                         x: Math.floor(this.logo.x),
    //                         y: Math.floor(this.logo.y)
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // }
}
