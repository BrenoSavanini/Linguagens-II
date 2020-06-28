import { Component, Input } from '@angular/core';
import { Curso } from '../shared/models/curso.model';
import { Usuario } from '../shared/models/usuario.model';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent{
  @Input() cursos: Array<Curso> = [];
  usuarios: Array<Usuario> = [];
  styleFont:string = "lighter"
  criarUsuario(usuarioForm:any){
    let nome = usuarioForm.value.nomeUser;
    let idade = usuarioForm.value.idadeUser;
    let curso = usuarioForm.value.cursoUser;
    this.usuarios.push({nome,idade,curso});

  }

  

}
