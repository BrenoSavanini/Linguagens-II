import { Component,  Output, EventEmitter} from '@angular/core';
import { Curso } from 'src/app/shared/models/curso.model';

@Component({
  selector: 'app-insert-cursos',
  templateUrl: './insert-cursos.component.html',
  styleUrls: ['./insert-cursos.component.css']
})
export class CursosComponent{
  @Output() insercaoCurso = new EventEmitter<Curso>();
  nomeCurso: string;
  descCurso: string;

  inserirCurso(){
    let curso = new Curso(this.nomeCurso,this.descCurso);
    this.insercaoCurso.emit(curso);
    this.nomeCurso = null;
    this.descCurso = null;
  }

}
