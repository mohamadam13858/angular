import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlihgtDirective } from './directives/basic-highlight.directive';
import { RenderbaseHighlightDirective } from './directives/renderbase-highlight.directive';
import { HideAfterDirective } from './directives/hide-after.directive';
import { FirstLogDirective } from './directives/first-log.directive';
import { LogComponent } from './log/log.component';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { MohamadComponent } from './mohamad/mohamad.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlihgtDirective,
    RenderbaseHighlightDirective,
    HideAfterDirective,
    FirstLogDirective,
    LogComponent,
    MohamadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
