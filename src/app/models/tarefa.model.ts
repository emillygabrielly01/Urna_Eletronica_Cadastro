export class Tarefa 
{
    nomeTarefa: string;
    statusTarefa: string;
    descricaoTarefa: string;
    idtarefa: number;
    tempotarefa: number;

    constructor(idtarefa: number, nomeTarefa: string, descricaoTarefa: string, tempoTarefa:number ,statusTarefa: string , ) {
      this.idtarefa  = idtarefa;
      this.tempotarefa = tempoTarefa;
      this.nomeTarefa = nomeTarefa;
      this.statusTarefa = statusTarefa;
      this. descricaoTarefa = descricaoTarefa;
    }
  }