import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class BattleScene extends Scene
{
    background: GameObjects.Image;
    mc: GameObjects.Image;
    enemy: GameObjects.Image;
    menu: GameObjects.Image;
    sub_menu: GameObjects.Image;

    // logoTween: Phaser.Tweens.Tween | null;

    constructor ()
    {
        super('BattleScene');
    }

    create ()
    {
        console.log('[${Preloader.name}:create] invoked');
        this.background = this.add.image(640, 320, 'battle_background');
        this.mc = this.add.image(250, 320, 'mc').setScale(0.7);
        this.enemy = this.add.image(1050, 380, 'slime'); 
        this.menu = this.add.image(640, 530, 'menu');

        const choice_Attack = this.add.text(128,64,'Attack',{fontFamily:'pixelFont',fontSize: '28px',color: '#443846'}).setOrigin(0.5);
        this.add.container(420,430,
            [this.add.image(0,0,'sub_menu').setScale(2).setOrigin(0),choice_Attack]
        );

        const choice_Defend = this.add.text(128,64,'Defend',{fontFamily:'pixelFont',fontSize: '28px',color: '#443846'}).setOrigin(0.5);
        this.add.container(600,430,
            [this.add.image(0,0,'sub_menu').setScale(2).setOrigin(0),choice_Defend]
        );

        const choice_Skill = this.add.text(128,64,'Skill',{fontFamily:'pixelFont',fontSize: '28px',color: '#443846'}).setOrigin(0.5);
        this.add.container(420,505,
            [this.add.image(0,0,'sub_menu').setScale(2).setOrigin(0),choice_Skill]
        );

        const choice_Coin_Exchange = this.add.text(128,64,'Coin Exchange',{fontFamily:'pixelFont',fontSize: '28px',color: '#443846'}).setOrigin(0.5);
        this.add.container(600,505,
            [this.add.image(0,0,'sub_menu').setScale(2).setOrigin(0),choice_Coin_Exchange]
        );

        this.add.text

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
