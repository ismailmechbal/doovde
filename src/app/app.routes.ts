import { provideRouter, RouterConfig }  from '@angular/router';
import { GamesComponent } from './games.component';
import { GameDetailComponent } from './game-detail.component';
import { GameFormComponent } from './game-form.component';


const routes: RouterConfig = [

  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'game/:id',
    component: GameDetailComponent
  },
  {
    path: 'games/new',
    component: GameFormComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
