import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tarefas: { tarefa: string, descricao: string, concluida: boolean }[] = [];
  novaTarefa: { tarefa: string, descricao: string, concluida: boolean } = { tarefa: '', descricao: '', concluida: false };

  adicionarTarefa() {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = { tarefa: '', descricao: '', concluida: false };
  }
}