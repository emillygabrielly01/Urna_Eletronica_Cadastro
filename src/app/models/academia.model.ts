import { Aluno } from "./aluno.model";

export class Academia {
  nomeAcademia: string = '';
  filialAcademia: number = 0;
  telefoneAcademia: number = 0;
  enderecoAcademia: string = '';
  alunos: Aluno [] = []
  
  

  constructor(NomeAcademia: string, filialAcademia: number, telefone:number, enderecoAcademia: string) {
    this.nomeAcademia = NomeAcademia;
    this.filialAcademia = filialAcademia;
  }
}
