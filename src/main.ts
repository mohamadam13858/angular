import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServersComponent } from './app/servers/servers.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    ServersComponent
  ]
}).catch(err => console.error(err));
