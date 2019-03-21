import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-game',
  templateUrl: './test-game.component.html',
  styleUrls: ['./test-game.component.scss']
})
export class TestGameComponent implements OnInit {

  game: Phaser.Game;

  public readonly gameConfig: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 }
      }
    },
    parent: 'game-content',
  };

  constructor() { }

  ngOnInit() {
    this.game = new Phaser.Game(this.gameConfig);
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  ngAfterViewInit(): void {
    this.game.events.once('ready', () => {
     // this.game.scene.add('MainScene', new MainScene(), true);
    });
    this.game.scene.getScene('')
  }

}
