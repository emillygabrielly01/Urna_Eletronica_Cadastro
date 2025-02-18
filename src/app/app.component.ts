import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdicionarTarefaComponent } from "./adicionar-tarefa/adicionar-tarefa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
