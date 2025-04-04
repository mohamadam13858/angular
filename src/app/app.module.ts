import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlihgtDirective } from './directives/basic-highlight.directive';
import { RenderbaseHighlightDirective } from './directives/renderbase-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlihgtDirective,
    RenderbaseHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
