import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface listaTarefas 
{
  id: number;
  tarefa: string;
  descricao: string;
  concluido: boolean;
}
@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent 
{
  tarefas: listaTarefas[] = [];
  novaTarefa: string = '';
  novadescricao: string = '';
 

  adicionar()   {
    if (this.novaTarefa.trim() !== '') 
    {
      const novaTarefa : listaTarefas=
      {
        id : Date.now(),
        tarefa : this.novaTarefa,
        descricao: this.novadescricao,
        concluido : false,
      }
      
      this.tarefas.push(novaTarefa);
      this.novaTarefa = '';
    }
  }

  tarefaConcluida(index: number)
  {
    this.tarefas[index].concluido = !this.tarefas[index].concluido;
    console.log(this.tarefas);
  }

  remover(index: number)
  {
    this.tarefas.splice(index, 1);
    console.log(this.tarefas);
    this.novaTarefa = '';
  }

}
