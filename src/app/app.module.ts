import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooComponent,
    BarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
