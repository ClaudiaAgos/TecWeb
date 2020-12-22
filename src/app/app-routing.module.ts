import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore
import { PlayerComponent } from './player/player.component';
import {HomeComponent} from "./home/home.component";
import {EditorComponent} from "./editor/editor.component";
import {TeamComponent} from "./player/team/team.component";


// @ts-ignore
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'player', component: PlayerComponent},
  { path: 'editor', component: EditorComponent},
  { path: 'app-team', component: TeamComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule{}
