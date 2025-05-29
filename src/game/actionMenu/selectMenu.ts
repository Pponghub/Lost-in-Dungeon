import { use } from "matter";
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
            .bitmapText(0, 0, "pixelFont", text, textSize)
            .setOrigin(0.5);

        const background_image = this.scene.add
            .image(0, 0, "sub_menu")
            .setScale(2)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        background_image.on("pointerover", () => {
            background_image.setTint(0xc2c0c0);
            background_image.setScale(1.9);
            choice.setFontSize(textSize - 2);
        });

        background_image.on("pointerout", () => {
            background_image.clearTint();
            background_image.setScale(2);
            choice.setFontSize(textSize);
        });

        background_image.on("pointerdown", () => {
            if (text === "Skill") {
                this.skillMenu.showSkillMenu();
                this.hideSelectMenu();
            } else {
                console.log(text);
            }
        });

        return this.scene.add.container(x + 126, y + 64, [
            background_image,
            choice,
        ]);
    }
}
