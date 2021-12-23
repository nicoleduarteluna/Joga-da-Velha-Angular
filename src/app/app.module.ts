import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JogaDaVelhaModule } from './joga-da-velha/joga-da-velha.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogaDaVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
