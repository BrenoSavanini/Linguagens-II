export class Usuario {
    nome: string;
    idade: number;
    curso:string;
    constructor(_nome:string, _idade:number,_curso:string){
        this.nome = _nome;
        this.idade = _idade;
        this.curso = _curso;
    }
}