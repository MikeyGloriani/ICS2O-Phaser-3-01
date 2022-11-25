/* global Phaser */

// Created by Mikey Gloriani
// Created on November 23 2022
// This is the menu scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
    this.menuSceneBackgroundImage = null;
    this.startButton = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Menu Scene");
    this.load.image(
      "splashSceneBackground",
      "./assets/aliens_screen_image2.jpg"
    );
    this.load.image("startButton", "./assets/start.png");
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );
    this.menuSceneBackgroundImage.x = 1920 / 2;
    this.menuSceneBackgroundImage.y = 1080 / 2;

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton");
  }

  update(time, delta) {}
}

export default MenuScene;
