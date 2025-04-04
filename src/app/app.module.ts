import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlihgtDirective } from './directives/basic-highlight.directive';
import { RenderbaseHighlightDirective } from './directives/renderbase-highlight.directive';
import { HideAfterDirective } from './directives/hide-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlihgtDirective,
    RenderbaseHighlightDirective,
    HideAfterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
