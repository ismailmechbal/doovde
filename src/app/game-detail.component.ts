import { Component, Input} from '@angular/core';
import { Game } from './game';

@Component(
  {
    selector: 'game-detail',
    templateUrl: "app/game-detail.component.html"
  }
)

export class GameDetailComponent {
  title = '';
  @Input()
  game: Game;
}
