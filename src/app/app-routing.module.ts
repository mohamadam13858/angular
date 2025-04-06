import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { MohamadComponent } from './mohamad/mohamad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MohamadIdComponent } from './mohamad-id/mohamad-id.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mohamad',
    pathMatch: 'full'
  },


  {
    path: 'log',
    component: LogComponent
  },


  {
    path: 'mohamad',
    component: MohamadComponent,
    children: [
      { path: 'description', component: DescriptionComponent },
      { path: 'tutorial', component: TutorialComponent }
    ]
  },


  {
    path: 'mohamad/:id',
    component: MohamadIdComponent,
    children: [
      { path: 'description', component: DescriptionComponent },
      { path: 'tutorial', component: TutorialComponent }
    ]
  },


  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
