import { GameObjects, Scene } from "phaser";

import { EventBus } from "../EventBus";

export class BattleScene extends Scene {
    background: GameObjects.Image;
    mc: GameObjects.Image;
    enemy: GameObjects.Image;
    menu: GameObjects.Image;
    sub_menu: GameObjects.Image;
    stat_box_mc: GameObjects.Image;
    stat_box_enemy: GameObjects.Image;

    // logoTween: Phaser.Tweens.Tween | null;

    constructor() {
        super("BattleScene");
    }

    create() {
        console.log("[${BattleScene.name}:create] invoked");

        const monster = this.cache.json.get("monster_data");
        const slime = monster[0];
        const mc = this.cache.json.get("mc_data");

        this.background = this.add.image(640, 320, "battle_background");
        this.mc = this.add.image(250, 320, "mc").setScale(0.7);
        this.enemy = this.add.image(1020, 380, "slime");
        this.menu = this.add.image(605, 530, "menu");
        this.stat_box_mc = this.add.image(245, 530, "stat_box").setScale(2);
        this.stat_box_enemy = this.add.image(1030, 530, "stat_box").setScale(2);

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
        const mc_hp_mp = this.add
            .bitmapText(
                32,
                45,
                "pixelFont",
                `Hp: ${mc.hp}/${mc.hp}\nMp: ${mc.mp}/${mc.mp}`,
                18
            )
            .setLineSpacing(5);
        const mc_stat_1 = this.add
            .bitmapText(
                15,
                90,
                "pixelFont",
                `Atk: ${mc.stats.atk}\nCrit: ${mc.stats.crit}\nLuk: ${mc.stats.luk}`,
                16
            )
            .setLineSpacing(10);
        const mc_stat_2 = this.add
            .bitmapText(
                105,
                90,
                "pixelFont",
                `Def: ${mc.stats.def}\nInt: ${mc.stats.int}\nCoin: ${mc.stats.coin}`,
                16
            )
            .setLineSpacing(10);
        this.add.container(150, 445, [mc_name, mc_hp_mp, mc_stat_1, mc_stat_2]);

        const monster_name = this.add.bitmapText(
            50,
            15,
            "pixelFont",
            `${slime.name}`,
            24
        );
        const monster_hp_mp = this.add
            .bitmapText(
                40,
                45,
                "pixelFont",
                `Hp: ${slime.hp}/${slime.hp}\nMp: ${slime.mp}/${slime.mp}`,
                18
            )
            .setLineSpacing(5);
        const monster_stat_1 = this.add
            .bitmapText(
                17,
                90,
                "pixelFont",
                `Atk: ${slime.stats.atk}\nCrit: ${slime.stats.crit}\nCoin: ${slime.stats.coin}`,
                16
            )
            .setLineSpacing(10);
        const monster_stat_2 = this.add
            .bitmapText(
                100,
                90,
                "pixelFont",
                `Def: ${slime.stats.def}\nInt: ${slime.stats.int}`,
                16
            )
            .setLineSpacing(10);
        this.add.container(935, 445, [
            monster_name,
            monster_hp_mp,
            monster_stat_1,
            monster_stat_2,
        ]);
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
