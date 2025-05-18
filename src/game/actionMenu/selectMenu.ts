export class SelectMenu {
    scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.callCreateSubPane();
    }

    private callCreateSubPane(): void {
        this.createSubPane(410, 428, "Attack", 24);
        this.createSubPane(610, 428, "Defend", 24);
        this.createSubPane(410, 505, "Skill", 24);
        this.createSubPane(610, 505, "Exchange", 20);
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

        return this.scene.add.container(x, y, [
            this.scene.add.image(0, 0, "sub_menu").setScale(2).setOrigin(0),
            choice,
        ]);
    }
}
