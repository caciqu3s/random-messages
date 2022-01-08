import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full'
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'me',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
