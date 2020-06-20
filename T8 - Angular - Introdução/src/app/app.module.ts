import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessoresComponent } from './professores/professores.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
