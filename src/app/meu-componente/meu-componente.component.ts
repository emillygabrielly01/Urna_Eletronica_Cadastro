import { Component, input, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeuComponenteListaTarefasComponent } from "../meu-componente-lista-tarefas/meu-componente-lista-tarefas.component";
import { Tarefa } from '../models/tarefas.model';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MeuComponente2Component, CommonModule, FormsModule, MeuComponenteListaTarefasComponent],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss'
})
export class MeuComponenteComponent {

  // esta estrutura é uma variavel que representa um array/ lista/ coleção / matriz do tipo Tarefa
  minhasTarefas: Tarefa[] = [];
  
incluirTarefa() {
  // aqui estou INCLUINDO um novo item ao array minhasTarefas
  if (this.idTarefa === 0) {
  // essa estrutura abaixo é uma variavel do tipo tarefa 
  // a palavra const quer dizer que apos a variavel ser inicializada atraves da palavra new, ela não pode ser inicializada novamente, pois o significado do const é igual a constante
  // ou seja, constante é algo que não muda
  const novaTarefa = (new Tarefa(this.minhaVariavel, this.tempoDaTarefa, 'Pendente'));
  // a propriedade .length pode ser utilizada para contar quantos itens existem dentro de uma array/ lista
  novaTarefa.idTarefa = this.minhasTarefas.length + 1;
  // push é um metodo que adiciona um novo item ao array/ lista
  this.minhasTarefas.push(novaTarefa);
  } else {
    // aqui estou ALTERANDO um novo item ao array minhasTarefas
   
    //nesta linha estou procurando um item na minha coleção usando como condição a propriedade idTarefa
    const ItemDaLista = this.minhasTarefas.find(mt => mt.idTarefa === this.idTarefa );

   // esta condição testa se a variavel ItemDaLista é diferente de null ou undefined
   // se ItemDaLista for encontrado o código que esta´entre as () do bloco IF será executada
   if (ItemDaLista) {
    ItemDaLista.nomeTarefa = this.minhaVariavel;
    ItemDaLista.tempoTarefa = this.tempoDaTarefa;

    const tarefa = this.minhasTarefas.find(t => t.idTarefa === ItemDaLista.idTarefa);
    if (ItemDaLista) {
      return
    } else {
      
    }

   }


  }
  this.minhaVariavel = '';
  this.tempoDaTarefa = 0;
  this.idTarefa = 0;

}
  // variaveis
  sextou: string = '';
  minhaVariavel: string = '';
  tempoDaTarefa = 0;
  idTarefa = 0;


   // Edita as variaveis para o evento preencherTarefa
   // o parametro fica dentro do () em um metodo, o que tiver dentro do () é parametro
   preencherTarefa($event: Tarefa) {
    this.minhaVariavel = $event.nomeTarefa;
    this.tempoDaTarefa = $event.tempoTarefa;
    this.idTarefa = $event.idTarefa;
    }

  
}