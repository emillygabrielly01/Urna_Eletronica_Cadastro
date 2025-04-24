export class Tarefa {
  nomeTarefa: string;
  tempoTarefa: number;
  statusTarefa: string;

  constructor(nomeTarefa: string, tempoTarefa: number, statusTarefa: string) {
    this.nomeTarefa = nomeTarefa;
    this.tempoTarefa = tempoTarefa;
    this.statusTarefa = statusTarefa;
  }
}