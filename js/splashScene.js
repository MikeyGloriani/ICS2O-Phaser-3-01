/* global Phaser */

// Created by Mikey Gloriani
// Created on November 8 2022
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }

  init(data) {
    this.camera.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("Splash Scene");
  }

  create(data) {
    
  }

  update(time, delta) {

  }
}

export default SplashScene;
