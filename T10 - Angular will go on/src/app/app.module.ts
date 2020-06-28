import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './insert-cursos/insert-cursos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormsModule } from '@angular/forms';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent,
    ListaCursosComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
