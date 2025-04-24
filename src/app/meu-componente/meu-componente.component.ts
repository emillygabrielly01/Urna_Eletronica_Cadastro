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

  minhasTarefas: Tarefa[] = [];

incluirTarefa() {
  this.minhasTarefas.push(new Tarefa(this.minhaVariavel, this.tempoDaTarefa, 'Pendente'));
}
  
  sextou: string = '';
 minhaVariavel: string = '';
  tempoDaTarefa = 0;
 ngAfterViewInit(): void 
 {
   this.Hello();
  }

   Hello(){
    //const variavel = this.OlaMundo();
    //console.log(variavel);

    const OlaMundo = this.InformaçõesDaAna('Ana', 'MG', 'Castanho', 21, 'Brisa', true);

  }

  OlaMundo(parametro1: string):string 
  {
    this.sextou = parametro1;
    return parametro1;
  }

   InformaçõesDaAna(nome:string, estado:string, cor:string, idade:number, cachorra:string, informacao: boolean,):string 
   {
     return 'Meu nome é ' + nome + ' moro em BH ' + estado + ' tenho cabelo cacheado ' + cor + 'e faço' + idade + 'tenho um cachorra que se chama' + cachorra + 'e tudo isso é' + informacao;
   }

   preencherTarefa($event: Tarefa) {
    this.minhaVariavel = $event.nomeTarefa;
    this.tempoDaTarefa = $event.tempoTarefa;
    }
}