import { GameObjects, Scene, Types } from "phaser";
import { SelectMenu } from "../actionMenu/selectMenu";
import { SkillMenu } from "../actionMenu/skillMenu";
import { EventBus } from "../EventBus";

export class BattleScene extends Scene {
    background: GameObjects.Image;
    mc: GameObjects.Image;
    enemy: GameObjects.Image;
    menu: GameObjects.Image;
    sub_menu: GameObjects.Image;
    stat_box_mc: GameObjects.Image;
    stat_box_enemy: GameObjects.Image;
    selectMenu: any;
    skillMenu: any;
    cancelKey: Phaser.Input.Keyboard.Key;

    constructor() {
        super("BattleScene");
    }

    //game cycle: standby->bet(1st turn)->menu->chose action->action->calulate damage->end turn

    create() {
        console.log("[${BattleScene.name}:create] invoked");

        const monster = this.cache.json.get("monster_data");
        const slime_stat = monster[0];
        const mc_stat = this.cache.json.get("mc_data");
        const skillData = this.cache.json.get("skill_data");

        this.background = this.add.image(640, 320, "battle_background");
        this.mc = this.add.image(250, 320, "mc").setScale(0.7);
        this.enemy = this.add.image(1020, 380, "slime");
        this.menu = this.add.image(605, 530, "menu");

        this.createStatWindow_mc(mc_stat);
        this.createStatWindow_enemy(slime_stat);

        this.skillMenu = new SkillMenu(this, skillData);
        this.selectMenu = new SelectMenu(this, this.skillMenu);
        this.selectMenu.showSelectMenu();

        // this.skillMenu.showSkillMenu();
        if (this.input.keyboard) {
            this.cancelKey = this.input.keyboard.addKey("ESC");
        }
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.cancelKey)) {
            if (this.skillMenu.skillMenuContainer.alpha === 1) {
                this.skillMenu.hideSkillMenu();
                this.selectMenu.showSelectMenu();
                console.log("cancel skill menu");
            }
        }
    }

    private createStatWindow_mc(stat: any) {
        const mc_name = this.add
            .bitmapText(0, -55, "pixelFont", `${stat.name}`, 24)
            .setOrigin(0.5);
        const mc_hp_mp = this.add
            .bitmapText(
                0,
                -15,
                "pixelFont",
                `Hp: ${stat.hp}/${stat.hp}\nMp: ${stat.mp}/${stat.mp}`,
                18
            )
            .setLineSpacing(5)
            .setOrigin(0.5);
        const mc_stat_1 = this.add
            .bitmapText(
                0,
                40,
                "pixelFont",
                `Atk: ${stat.stats.atk}\nCrit: ${stat.stats.crit}\nLuk: ${stat.stats.luk}`,
                16
            )
            .setLineSpacing(10)
            .setOrigin(1, 0.5);
        const mc_stat_2 = this.add
            .bitmapText(
                10,
                40,
                "pixelFont",
                `Def: ${stat.stats.def}\nInt: ${stat.stats.int}\nCoin: ${stat.stats.coin}`,
                16
            )
            .setLineSpacing(10)
            .setOrigin(0, 0.5);

        this.stat_box_mc = this.add
            .image(0, 0, "stat_box")
            .setScale(2)
            .setOrigin(0.5);
        this.add.container(245, 530, [
            this.stat_box_mc,
            mc_name,
            mc_hp_mp,
            mc_stat_1,
            mc_stat_2,
        ]);
    }

    private createStatWindow_enemy(stat: any) {
        const monster_name = this.add
            .bitmapText(0, -55, "pixelFont", `${stat.name}`, 24)
            .setOrigin(0.5);
        const monster_hp_mp = this.add
            .bitmapText(
                0,
                -15,
                "pixelFont",
                `Hp: ${stat.hp}/${stat.hp}\nMp: ${stat.mp}/${stat.mp}`,
                18
            )
            .setLineSpacing(5)
            .setOrigin(0.5);
        const monster_stat_1 = this.add
            .bitmapText(
                0,
                30,
                "pixelFont",
                `Atk: ${stat.stats.atk}\nCrit: ${stat.stats.crit}`,
                16
            )
            .setLineSpacing(10)
            .setOrigin(1, 0.5);
        const monster_stat_2 = this.add
            .bitmapText(
                10,
                30,
                "pixelFont",
                `Def: ${stat.stats.def}\nInt: ${stat.stats.int}`,
                16
            )
            .setLineSpacing(10)
            .setOrigin(0, 0.5);
        const monster_coin = this.add
            .bitmapText(0, 55, "pixelFont", `Coin: ${stat.stats.coin}`, 16)
            .setLineSpacing(10)
            .setOrigin(0.5, 0);

        this.stat_box_enemy = this.add
            .image(0, 0, "stat_box")
            .setScale(2)
            .setOrigin(0.5);
        this.add.container(1030, 530, [
            this.stat_box_enemy,
            monster_name,
            monster_hp_mp,
            monster_stat_1,
            monster_stat_2,
            monster_coin,
        ]);
    }
}
