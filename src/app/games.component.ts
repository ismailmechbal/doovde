import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';
import { GameDetailComponent } from './game-detail.component';

@Component({
  moduleId: module.id,
  selector: 'games',
  templateUrl: "games.component.html",
  directives: [GameDetailComponent],
  providers: [GameService],
  styleUrls: ['games.component.css']
})

export class GamesComponent implements OnInit {
  title = 'All Games';
  games: Game[];
  selectedGame: Game;

  constructor(private gameService: GameService) { }

  getGames() {
    this.gameService.getGames()
      .then(games=> this.games = games)
  }

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: Game) {
    this.selectedGame = game;
  }
}