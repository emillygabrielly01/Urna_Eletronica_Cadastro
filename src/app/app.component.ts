import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
{
  tarefas: { tarefa: string, descricao: string, concluida: boolean }[] = [];
  novaTarefa: { tarefa: string, descricao: string, concluida: boolean } = { tarefa: '', descricao: '', concluida: false };

  adicionarTarefa()
  {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = { tarefa: '', descricao: '', concluida: false };
  }
}
