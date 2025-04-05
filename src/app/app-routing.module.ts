import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { MohamadComponent } from './mohamad/mohamad.component';

const routes: Routes = [{
  path: 'log',
  component: LogComponent
}, {
  path: 'mohamad',
  component: MohamadComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
