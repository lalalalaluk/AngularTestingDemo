import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';


export const routes: Routes = [
  { path: '', redirectTo: 'c1', pathMatch: 'full' },
  { path: 'voter', component:VoterComponent },
  { path: '**', redirectTo: 'com1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
