export class Tarefa {
  nomeTarefa: string;
  tempoTarefa: number;
  statusTarefa: string;
  idTarefa: number;
  

  constructor(nomeTarefa: string, tempoTarefa: number, statusTarefa: string) {
    this.idTarefa = 0;
    this.nomeTarefa = nomeTarefa;
    this.tempoTarefa = tempoTarefa;
    this.statusTarefa = statusTarefa;
  }
}