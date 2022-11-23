/* global Phaser */

// Created by Mikey Gloriani
// Created on November 8 2022
// This is the Phaser3 game configuration file

/**
 * Start Phaser game
 */
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"

//Game Scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new TitleScene()

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // Center placement
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// load scene
// Note: Any "key" is global and can't be reused
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)

// game start
game.scene.start("splashScene")
