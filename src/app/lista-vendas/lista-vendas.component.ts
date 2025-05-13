import { Component, EventEmitter, Input, Output } from '@angular/core';
import { vendas } from '../models/vendas.model';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-vendas',
  standalone: true,
  imports: [MatCheckboxModule,MatIconModule,NgFor],
  templateUrl: './lista-vendas.component.html',
  styleUrl: './lista-vendas.component.scss'
})
export class ListaVendasComponent 
{
     // Input da lista(arry) de produtos
  @Input() vendas: vendas[] = [];

  // No caso o Output  do produto produtoEditado
  @Output() vendaEditado = new EventEmitter<vendas>();
  

 // Metodo para excluir um produto
 excluirVenda(paramVenda : vendas)
 {
   // Neste caso esta usando findIndex para procurar o produto que foi selecionado para ser excluido e ultilizando o splice para excluir
   const posicaoVenda = this.vendas.findIndex(v => v.nome === paramVenda.nome)
   const produto = this.vendas.find(p => p.nome === paramVenda.nome)
   console.log('posição do Item na lista:' + posicaoVenda);
   console.log(produto);
   if (posicaoVenda >= 0) 
   {
     // metodo para exluir remover
     this.vendas.splice(posicaoVenda,1)
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
 editarVenda(paramVenda : vendas)
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
