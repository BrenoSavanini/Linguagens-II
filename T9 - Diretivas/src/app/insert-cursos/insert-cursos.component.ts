import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insert-cursos',
  templateUrl: './insert-cursos.component.html',
  styleUrls: ['./insert-cursos.component.css']
})
export class CursosComponent implements OnInit {
  public cursos = [];
  constructor() { }

  ngOnInit(): void {
  }

}
