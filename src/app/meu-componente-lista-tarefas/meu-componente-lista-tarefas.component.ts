import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../models/tarefas.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-meu-componente-lista-tarefas',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './meu-componente-lista-tarefas.component.html',
  styleUrl: './meu-componente-lista-tarefas.component.scss'
})
export class MeuComponenteListaTarefasComponent {

 @Output() editarTarefa = new EventEmitter<Tarefa>(); 

excluirTarefa(paramTarefa: Tarefa) {
  // "t" É A VARIAVEL QUE REPRESENTA UM ITEM DA LISTA DE TAREFAS
  // O METODO FINDINDEX LOCALIZA UM ITEM DA LISTA E RETORNA O POSIÇÃO DELE
  const posicaoItemDaLista = this.tarefas.findIndex(t => t.nomeTarefa === paramTarefa.nomeTarefa);
  // find retorna o item da lista completo, mostrando todos os dados
  const ItemDaLista = this.tarefas.find(t => t.nomeTarefa === paramTarefa.nomeTarefa);

  console.log(' posição do item na lista: ' + posicaoItemDaLista);
  console.log(ItemDaLista);
  




  // SE O VALOR RETORNADO DO FINDINDEX FOR MAIOR QUE -1, SIGNIFICA QUE O ITEM EXISTE NA LISTA
  if (posicaoItemDaLista > -1) {
    this.tarefas.splice(posicaoItemDaLista, 1);
  }
}
@Input() tarefas: Tarefa[] = [];


enviarTarefa(paramTarefa: Tarefa) {
   this.editarTarefa.emit(paramTarefa);
   console.log(paramTarefa);
  
  }

  tarefaConcluida(paramTarefa: Tarefa){
    paramTarefa.statusTarefa = 'Concluída';

    // const tarefa = this.tarefas.find(t => t.idTarefa === paramTarefa.idTarefa);
    // if (tarefa) {
    // tarefa.statusTarefa = 'Concluída';
     
       
    //  }
  }

}
