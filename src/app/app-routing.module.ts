import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestGameComponent } from './games/test-game/test-game.component';

const routes: Routes = [
  {path:'', component: TestGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
