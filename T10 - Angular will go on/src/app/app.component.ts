import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/shared/models/curso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showProfessores = false;
  public showCursos = false;
  public showUsuarios = false;

  public cursos: Array<Curso> = [];

  title = 'Mauá';

  ngOnInit(){
    this.openMenu();
  }

  openProfessores(){
    this.showCursos = false;
    this.showProfessores = true;
    this.showUsuarios = false;
  }
  openMenu(){
    this.showCursos = true;
    this.showProfessores = false;
    this.showUsuarios = false;

  }
  openUsuarios(){
    this.showCursos = false;
    this.showProfessores = false;
    this.showUsuarios = true;
  }
  insertList(curso:Curso){
    this.cursos = [curso, ...this.cursos];
  }
}
