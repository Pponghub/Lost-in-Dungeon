import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, "background");

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on("progress", (progress: number) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + 460 * progress;
        });
    }

    preload() {
        this.load.setPath("assets/images");

        this.load.image("battle_background", "battle_background.png");
        this.load.image("mc", "mc_gambler.png");
        this.load.image("menu", "main_control_menu.png");
        this.load.image("sub_menu", "menu_action_box.png");
        this.load.image("slime", "slime.png");
        this.load.image("stat_box", "stat_box.png");

        this.load.setPath("data");

        this.load.json("mc_data", "mc_data.json");
        this.load.json("monster_data", "monster_data.json");
        this.load.json("skill_data","skill_data.json");

        this.load.setPath("fonts");
        this.load.bitmapFont(
            "pixelFont",
            "PixelatedElegance.png",
            "PixelatedElegance.fnt"
        );
    }

    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the BattleScene. You could also swap this for a Scene Transition, such as a camera fade.
        console.log("[${Preloader.name}:create] invoked");
        this.scene.start("BattleScene");
    }
}
