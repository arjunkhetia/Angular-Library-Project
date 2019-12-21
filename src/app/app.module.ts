import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularLibraryModule } from '../../projects/angular-library/src/lib/angular-library.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularLibraryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
