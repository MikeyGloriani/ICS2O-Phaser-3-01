/* global Phaser */

// Created by Mikey Gloriani
// Created on November 8 2022
// This is the title scene

class TitleScene extends Phaser.Scene {
    constructor() {
      super({ key: "titleScene" });
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff");
    }
  
    preload() {
      console.log("Title Scene");
    }
  
    create(data) {}
  
    update(time, delta) {
    }
  }
  
  export default TitleScene;
  