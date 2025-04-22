import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meu-componente-2',
  standalone: true,
  imports: [],
  templateUrl: './meu-componente-2.component.html',
  styleUrl: './meu-componente-2.component.scss'
})
export class MeuComponente2Component 
{
  //Esta definindo uma propriedade de entrada chamada descricaoTarefa.
  @Input() descricaoTarefa! : string;
  // Esta definindo uma propriedade de saída chamada tarefaConcluida que emite eventos do tipo string.
  @Output() tarefaConcluida = new EventEmitter<string>();


  // Esta define o metodo concluida.
  concluida()
  {
    // Esta emitindo um evento tarefaConcluida com o valor da descricaoTarefa.
    this.tarefaConcluida.emit(this.descricaoTarefa);
  }
}
