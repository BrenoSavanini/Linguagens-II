import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showProfessores = false;
  public showCursos = false;
  ngOnInit(){
    this.showCursos = true;
  }

  openProfessores(){
    this.showCursos = false;
    this.showProfessores = true;
  }
  openMenu(){
    this.showCursos = true;
    this.showProfessores = false;
  }
  title = 'Mauá';
}
