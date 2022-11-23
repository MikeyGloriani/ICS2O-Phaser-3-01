/* global Phaser */

// Created by Mikey Gloriani
// Created on November 23 2022
// This is the menu scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("menu Scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default MenuScene;
