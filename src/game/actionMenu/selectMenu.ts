import { SkillMenu } from "./skillMenu";

export class SelectMenu {
    scene: Phaser.Scene;
    selectMenuContainer: Phaser.GameObjects.Container;
    skillMenu: SkillMenu;

    constructor(scene: Phaser.Scene, skillMenu: SkillMenu) {
        this.scene = scene;
        this.skillMenu = skillMenu;
        this.callCreateSubPane();
    }

    public showSelectMenu(): void {
        this.selectMenuContainer.setAlpha(1);
        console.log("show select menu");
    }

    public hideSelectMenu(): void {
        this.selectMenuContainer.setAlpha(0);
        console.log("hide select menu");
    }

    private callCreateSubPane(): void {
        this.selectMenuContainer = this.scene.add.container(410, 428, [
            this.createSubPane(0, 0, "Attack", 24),
            this.createSubPane(200, 0, "Defend", 24),
            this.createSubPane(0, 77, "Skill", 24),
            this.createSubPane(200, 77, "Exchange", 20),
        ]);
        this.hideSelectMenu();
    }

    private createSubPane(
        x: number,
        y: number,
        text: string,
        textSize: number
    ) {
        const choice = this.scene.add
            .bitmapText(126, 64, "pixelFont", text, textSize)
            .setOrigin(0.5);

        const background_image = this.scene.add
            .image(0, 0, "sub_menu")
            .setScale(2)
            .setOrigin(0)
            .setInteractive();

        background_image.on("pointerdown", () => {
            if (text === "Skill") {
                this.skillMenu.showSkillMenu();
                this.hideSelectMenu();
            }
        });

        return this.scene.add.container(x, y, [background_image, choice]);
    }
}
