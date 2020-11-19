import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatBadgeModule } from '@angular/material/badge';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';


@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent],
  imports: [BrowserModule, MatBadgeModule],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void{
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('main-component', elm);
  }
}
