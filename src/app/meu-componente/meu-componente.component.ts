import { Component, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [FormsModule, MeuComponente2Component, NgFor],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss'
})
export class MeuComponenteComponent 
{
//Esta definindo uma propriedade de entrada chamada adicionarTarefa que esta sendo inicializada como uma string vazia.
adicionarTarefa = ''
//Esta declarando uma propriedade tarefas como um array de strings que esta inicializado como vazio.
tarefas : string [] = [];


//Esta definindo metodo novaTarefa
novaTarefa()
{
  // Verificando se o adicionar tarefa nao eta vazia.
  if (this.adicionarTarefa) 
  {
    //Adicionando ovalor de adicionartarefa oa array tarefas.
    this.tarefas.push(this.adicionarTarefa);
    // limpar o valor de adicionarTarfa.
    this.adicionarTarefa = '';
  }
}

//Esta definindo o metodo tarefaConcluida.
tarefaConcluida(parametro1: string)
{
  // limpar o array de adicionarTarfa.
  // this.tarefas = [];
  // O .findIndex retorna em qual posicoa foi encontrada a palavra contida em parametro1.
  // O i => representa o elemento atual da lista, foi ultilizado a letra i mas podemos ultilizar qualquer letra ou palavra.
  const posicaoItemLista = this.tarefas.findIndex(i => i == parametro1);
  console.clear();
  console.log(this.tarefas);
  console.log(posicaoItemLista);
  this.tarefas.splice(posicaoItemLista,1);
}

}
