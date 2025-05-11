import { GameObjects, Scene } from "phaser";

import { EventBus } from "../EventBus";

export class BattleScene extends Scene {
    background: GameObjects.Image;
    mc: GameObjects.Image;
    enemy: GameObjects.Image;
    menu: GameObjects.Image;
    sub_menu: GameObjects.Image;

    // logoTween: Phaser.Tweens.Tween | null;

    constructor() {
        super("BattleScene");
    }

    create() {
        console.log("[${BattleScene.name}:create] invoked");

        const monsters = this.cache.json.get("monster_data");
        const mc = this.cache.json.get("mc_data");

        this.background = this.add.image(640, 320, "battle_background");
        this.mc = this.add.image(250, 320, "mc").setScale(0.7);
        this.enemy = this.add.image(1050, 380, "slime");
        this.menu = this.add.image(605, 530, "menu");

        const choice_Attack = this.add
            .bitmapText(126, 64, "pixelFont", "Attack", 24)
            .setOrigin(0.5);
        this.add.container(400, 428, [
            this.add.image(0, 0, "sub_menu").setScale(2).setOrigin(0),
            choice_Attack,
        ]);

        const choice_Defend = this.add
            .bitmapText(126, 64, "pixelFont", "Defend", 24)
            .setOrigin(0.5);
        this.add.container(620, 428, [
            this.add.image(0, 0, "sub_menu").setScale(2).setOrigin(0),
            choice_Defend,
        ]);

        const choice_Skill = this.add
            .bitmapText(126, 64, "pixelFont", "Skill", 24)
            .setOrigin(0.5);
        this.add.container(400, 505, [
            this.add.image(0, 0, "sub_menu").setScale(2).setOrigin(0),
            choice_Skill,
        ]);

        const choice_Coin_Exchange = this.add
            .bitmapText(126, 64, "pixelFont", "Exchange", 20)
            .setOrigin(0.5);
        this.add.container(620, 505, [
            this.add.image(0, 0, "sub_menu").setScale(2).setOrigin(0),
            choice_Coin_Exchange,
        ]);

        const mc_name = this.add.bitmapText(
            30,
            15,
            "pixelFont",
            `${mc.name}`,
            24
        );
        const mc_hp_mp = this.add.bitmapText(
            32,
            45,
            "pixelFont",
            `Hp: ${mc.hp}/${mc.hp}\nMp: ${mc.mp}/${mc.mp}`,
            18
        );
        const mc_stat = this.add.bitmapText(
            32,
            45,
            "pixelFont",
            `Hp: ${mc.hp}/${mc.hp}\nMp: ${mc.mp}/${mc.mp}`,
            18
        );
        this.add.container(150, 440, [mc_name, mc_hp_mp]);

        EventBus.emit("current-scene-ready", this);
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
