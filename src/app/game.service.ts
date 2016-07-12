import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';


@Injectable()
export class GameService {
  getGames() {
    return Promise.resolve(GAMES);
  };

  getGame(id: number) {
    return this.getGames()
    .then(games=> games.find(game=> game.id == id))
  };

  saveGame(game: Game) {
  };
}
