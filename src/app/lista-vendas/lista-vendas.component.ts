// Aqui defino o componente Angular, com os módulos que ele usa e os arquivos de template e estilo.
import { Vendas } from '../models/vendas.model';
import { Produto } from '../models/produto.model';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component
({
  selector: 'app-lista-vendas',
  standalone: true,
  imports: [MatCheckboxModule,MatIconModule,NgFor,CommonModule],
  templateUrl: './lista-vendas.component.html',
  styleUrl: './lista-vendas.component.scss'
})

// Começo a classe do componente.
export class ListaVendasComponent 
{
  // Input da lista(arry) de Vendas
  // Recebo a lista(arry) de vendas como entrada do componente pai.
  @Input() vendas : Vendas[] = [];

  // Input da lista(arry) de produtos
  // Também recebo a lista(arry) de produtos.
  @Input() produto : Produto [] = [];

  // Crio um evento para emitir quando uma venda for editada.
  @Output() vendaEditado = new EventEmitter<Vendas>();

  // Crio um evento para avisar quando uma venda for excluída.
  @Output() itemExcluido = new EventEmitter<void>();

 // Metodo para excluir uma venda da lista(arry).
 excluirVenda(paramVenda : Vendas)
  {
   // Procuro a posição da venda na lista(arry) com base no nome do produto.
   // Neste caso esta usando findIndex para procurar o produto que foi selecionado para ser excluido e ultilizando o splice para excluir
   const posicaoVenda = this.vendas.findIndex(v => v.nomeProduto === paramVenda.nomeProduto)
   //  Também pego a venda correspondente.
   const produto = this.vendas.find(p => p.nomeProduto === paramVenda.nomeProduto)
   //  Mostro no console a posição e os dados da venda que será excluída.
   console.log('posição do Item na lista:' + posicaoVenda);
   console.log(produto);
  //  Se a venda existir na lista, removo ela com splice e emito o evento de exclusão.
   if (posicaoVenda >= 0) 
   {
     // metodo para exluir remover.
     this.vendas.splice(posicaoVenda,1);
     this.itemExcluido.emit()
   }
   // // O .findIndex retorna em qual posicoa foi encontrada a palavra contida em parametro1.
   // // O i => representa o elemento atual da lista, foi ultilizado a letra i mas podemos ultilizar qualquer letra ou palavra.
   // const posicaoTarefa = this.tarefas.findIndex(t => t.nomeTarefa === paramTarefa.nomeTarefa);
   // const tarefa = this.tarefas.find(t => t.nomeTarefa === paramTarefa.nomeTarefa);
   // console.log('posição do Item na lista:' + posicaoTarefa);
   // console.log(tarefa);
   // if (posicaoTarefa > -1) 
   // {
   //   this.tarefas.splice(posicaoTarefa, 1);
   // }
 }

 // Metodo para editar um produto
//  Essa função emite a venda selecionada para edição e mostra os dados no console.
 editarVenda(paramVenda : Vendas)
 {
   //Emite o produto selecionado para ediçao para componente pai no caso o meu-componente 
   this.vendaEditado.emit(paramVenda);
   // Ele exibe no console os dados do produto que esta sendo editado
   console.log(paramVenda);
 }
 // concluirProduto(paramProduto : Produto)
 // {
 //   paramProduto.status = 'Concluida';
 // }
}