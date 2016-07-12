import { Component } from '@angular/core';
import { Game } from './game';

@Component(
  {
    templateUrl: "app/game-form.component.html"
  }
)

export class GameFormComponent {
  model= new Game();
  onSubmit() {
    console.log(this.model);
  }
}