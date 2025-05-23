export class SkillMenu {
    scene: Phaser.Scene;
    skillData: any[];
    skillMenuContainer: Phaser.GameObjects.Container;

    constructor(scene: Phaser.Scene, skillData: any[]) {
        this.scene = scene;
        this.skillData = skillData;
        this.callCreateSkillPane();
    }

    public showSkillMenu(): void {
        this.skillMenuContainer.setAlpha(1);
        console.log("show skill menu");
    }

    public hideSkillMenu(): void {
        this.skillMenuContainer.setAlpha(0);
        console.log("hide skill menu");
    }

    private callCreateSkillPane(): void {
        this.skillMenuContainer = this.scene.add.container(410, 428, [
            this.createSkillPane(0, 0, this.skillData[3].name, 16),
            this.createSkillPane(200, 0, this.skillData[4].name, 16),
            this.createSkillPane(0, 77, this.skillData[5].name, 14),
            this.createSkillPane(200, 77, this.skillData[6].name, 14),
        ]);
        this.hideSkillMenu();
    }

    private createSkillPane(
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
            .setInteractive();

        background_image.on("pointerdown", () => {
            console.log(text);
        });

        return this.scene.add.container(x + 126, y + 64, [
            background_image,
            choice,
        ]);
    }
}
