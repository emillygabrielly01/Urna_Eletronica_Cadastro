import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Produto } from '../models/produto.model';
import { Vendas } from '../models/vendas.model';

@Component({
  selector: 'app-meu-componente-2',
  standalone: true,
  imports: [ MatCheckboxModule,MatIconModule,NgFor,CommonModule],
  templateUrl: './meu-componente-2.component.html',
  styleUrl: './meu-componente-2.component.scss'
})
export class MeuComponente2Component 
{
  // Input da lista(arry) de produtos
  // Recebo a lista de produtos como entrada (Input) do componente pai.
  @Input() produtos!: Produto[];

  // Recebo a lista de vendas como entrada (Input) do componente pai.
  @Input() vendas : Vendas[]= [];

  // Crio um Output para emitir o produto que será editado, permitindo que o componente pai reaja.
  @Output() produtoEditado = new EventEmitter<Produto>();
 

  // Metodo para excluir um produto
  excluirProduto(paramProduto : Produto)
  {
    // Neste caso esta usando findIndex para procurar o produto que foi selecionado para ser excluido e ultilizando o splice para excluir
    // Procuro a posição do produto na lista com base no nome.
    const posicaoproduto = this.produtos.findIndex(p => p.nome === paramProduto.nome)
    // Também busco o produto completo para exibir no console.
    const produto = this.produtos.find(p => p.nome === paramProduto.nome)
    // Mostro no console a posição e os dados do produto.
    console.log('posição do Item na lista:' + posicaoproduto);
    console.log(produto);
    // Se encontrar o produto, removo ele da lista usando splice.
    if (posicaoproduto >= 0) 
    {
      // metodo para exluir remover
      this.produtos.splice(posicaoproduto,1)
    }
  }

  // Metodo para editar um produto
  editarProduto(paramProduto : Produto)
  {
    // Emite o produto selecionado para o componente pai (MeuComponenteComponent). 
    this.produtoEditado.emit(paramProduto);
    // Mostra no console os dados do produto que está sendo editado.
    console.log(paramProduto);
  }
}
  // exemplo anterior do metodo excluir.
  // O .findIndex retorna em qual posicoa foi encontrada a palavra contida em parametro1.
  // O i => representa o elemento atual da lista, foi ultilizado a letra i mas podemos ultilizar qualquer letra ou palavra.
  // const posicaoTarefa = this.tarefas.findIndex(t => t.nomeTarefa === paramTarefa.nomeTarefa);
  // const tarefa = this.tarefas.find(t => t.nomeTarefa === paramTarefa.nomeTarefa);
  // console.log('posição do Item na lista:' + posicaoTarefa);
  // console.log(tarefa);if (posicaoTarefa > -1){this.tarefas.splice(posicaoTarefa, 1);}
    
  // concluirProduto(paramProduto : Produto)
  // {
  //   paramProduto.status = 'Concluida';
  // }

