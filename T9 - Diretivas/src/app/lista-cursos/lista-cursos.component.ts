import { Component, OnInit, Input} from '@angular/core';
import { Curso } from '../shared/models/curso.model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  @Input() cursos: Array<Curso> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
