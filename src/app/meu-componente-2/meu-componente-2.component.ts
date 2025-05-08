import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { vendas } from '../models/vendas.model';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-meu-componente-2',
  standalone: true,
  imports: [ MatCheckboxModule,MatIconModule,NgFor],
  templateUrl: './meu-componente-2.component.html',
  styleUrl: './meu-componente-2.component.scss'
})
export class MeuComponente2Component 
{
  // Input da lista(arry) de produtos
  @Input() produtos: Produto[] = [];

  // No caso o Output  do produto produtoEditado
  @Output() produtoEditado = new EventEmitter<Produto>();
 

  // Metodo para excluir um produto
  excluirProduto(paramProduto : Produto)
  {
    // Neste caso esta usando findIndex para procurar o produto que foi selecionado para ser excluido e ultilizando o splice para excluir
    const posicaoproduto = this.produtos.findIndex(p => p.nome === paramProduto.nome)
    const produto = this.produtos.find(p => p.nome === paramProduto.nome)
    console.log('posição do Item na lista:' + posicaoproduto);
    console.log(produto);
    if (posicaoproduto >= 0) 
    {
      // metodo para exluir remover
      this.produtos.splice(posicaoproduto,1)
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
  editarProduto(paramProduto : Produto)
  {
    //Emite o produto selecionado para ediçao para componente pai no caso o meu-componente 
    this.produtoEditado.emit(paramProduto);
    // Ele exibe no console os dados do produto que esta sendo editado
    console.log(paramProduto);
  }
    
  // concluirProduto(paramProduto : Produto)
  // {
  //   paramProduto.status = 'Concluida';
  // }
}
