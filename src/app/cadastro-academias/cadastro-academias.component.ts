import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MeuComponente2Component } from '../meu-componente-2/meu-componente-2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeuComponenteListaTarefasComponent } from '../meu-componente-lista-tarefas/meu-componente-lista-tarefas.component';
import { Academia } from '../models/academia.model';
import { ListaAcademiaComponent } from "../lista-academia/lista-academia.component";

@Component({
  selector: 'app-cadastro-academias',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule, ListaAcademiaComponent],
  templateUrl: './cadastro-academias.component.html',
  styleUrl: './cadastro-academias.component.scss'
})
export class CadastroAcademiasComponent 
{
  // array do projeto
  academias: Academia[] = [];  // esta estrutura é uma variavel que representa um array (lista) matriz do tipo Academia

  // variaveis do projeto academia
    academiaSelecionada: Academia = new Academia('',0, 0, '');
    nomeAcademia: string = '';
    filialAcademia = 0;
    telefoneAcademia = 0;
    enderecoAcademia: string = '';
    msgAcademia = '';
   
  incluirAcademia() // metodo que inclui academias no projeto
  {
      // não permite que o usuário adicione a mesma academia 
      // toLowerCase converte os caracteres para minúsculas
      // metodo some verifica se algum item está correto na condição estabelecida, se tiver retorna true
    if (this.academias.find(a => a.nomeAcademia.toLowerCase() === this.nomeAcademia.toLowerCase() )) {
      this.msgAcademia = 'Essa academia já foi cadastrada';
      this.nomeAcademia = '';
      this.filialAcademia = 0;
      this.telefoneAcademia = 0;
      this.enderecoAcademia = '';
      return;
    }

     // nesta linha estou procurando um item na minha array usando find que retorna o item da lista completo, mostrando todos os dados 
      const ItemDaLista= this.academias.find(a=> a.nomeAcademia === this.academiaSelecionada.nomeAcademia);

      if (ItemDaLista) // e se caso encontrar a academia e clicar no icone de editar, vai retornar o que foi escrito para ser editado
    {
       ItemDaLista.nomeAcademia = this.nomeAcademia;
       ItemDaLista.filialAcademia = this.filialAcademia;
       ItemDaLista.telefoneAcademia = this.telefoneAcademia;
       ItemDaLista.enderecoAcademia =this.enderecoAcademia;
        
    }
      else // e não sendo encontrado, vai ser adicionado como nova academia 
    {
       const novaAcademia = new Academia(this.nomeAcademia, this.filialAcademia,this.telefoneAcademia,this.enderecoAcademia);
       this.academias.push(novaAcademia);
        
    }
       // essas declarações é para limpar os campos 
      this.nomeAcademia= '';
      this.filialAcademia = 0;
      this.telefoneAcademia = 0;
      this.enderecoAcademia = '';
  }
    preencherAcademia($event: Academia) // é metodo que preenche o formulario com o que for escrito
  {
      this.academiaSelecionada = $event;
      this.nomeAcademia = $event.nomeAcademia;
      this.filialAcademia = $event.filialAcademia;
      this.telefoneAcademia = $event.telefoneAcademia;
      this.enderecoAcademia =$event.enderecoAcademia;

      
  }
 // variaveis projeto alunos
  alunoAcademia = '';
  nomeAluno = '';
  idadeAluno = 0;
  pesoAluno = 0;
  pressaoAltaAluno: boolean = true;
  incluirAluno(){
    

  }
}
      





















































































































































//   msgUsuario: string = '';
  
// incluirTarefa() {
//   this.msgUsuario = '';
//   // aqui estou INCLUINDO um novo item ao array minhasTarefas
//   if (this.idTarefa === 0) {
//     //impede que o usuario adicione uma tarefa com o mesmo nome
//     const tarefa = this.minhasTarefas.find(t => t.nomeTarefa.toLowerCase() === this.minhaVariavel.toLowerCase());

//     if (tarefa) {
//           this.msgUsuario = 'Tarefa com este nome já existe.';
//            return;

//     }
//   // essa estrutura abaixo é uma variavel do tipo tarefa 
//   // a palavra const quer dizer que apos a variavel ser inicializada atraves da palavra new, ela não pode ser inicializada novamente, pois o significado do const é igual a constante
//   // ou seja, constante é algo que não muda
//   const novaTarefa = (new Tarefa(this.minhaVariavel, this.tempoDaTarefa, 'Pendente'));
//   // a propriedade .length pode ser utilizada para contar quantos itens existem dentro de uma array/ lista
//   novaTarefa.idTarefa = this.minhasTarefas.length + 1;
//   // push é um metodo que adiciona um novo item ao array/ lista
//   this.minhasTarefas.push(novaTarefa);
//   } else {
//     // aqui estou ALTERANDO um novo item ao array minhasTarefas
   
//     //nesta linha estou procurando um item na minha coleção usando como condição a propriedade idTarefa
//     const ItemDaLista = this.minhasTarefas.find(mt => mt.idTarefa === this.idTarefa );

//    // esta condição testa se a variavel ItemDaLista é diferente de null ou undefined
//    // se ItemDaLista for encontrado o código que esta´entre as () do bloco IF será executada
//    if (ItemDaLista) {
//     ItemDaLista.nomeTarefa = this.minhaVariavel;
//     ItemDaLista.tempoTarefa = this.tempoDaTarefa;

//     const tarefa = this.minhasTarefas.find(t => t.idTarefa === ItemDaLista.idTarefa);
//     if (ItemDaLista) {
//       return
//     } else {
      
//     }

//    }


//   }
//   this.minhaVariavel = '';
//   this.tempoDaTarefa = 0;
//   this.idTarefa = 0;

// }
//   // variaveis
//   minhaVariavel: string = '';
//   tempoDaTarefa = 0;
//   idTarefa = 0;


//    // Edita as variaveis para o evento preencherTarefa
//    // o parametro fica dentro do () em um metodo, o que tiver dentro do () é parametro
//    preencherTarefa($event: Tarefa) {
//     this.minhaVariavel = $event.nomeTarefa;
//     this.tempoDaTarefa = $event.tempoTarefa;
//     this.idTarefa = $event.idTarefa;
//     }

  
