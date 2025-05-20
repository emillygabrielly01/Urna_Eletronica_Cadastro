import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vendas } from '../models/vendas.model';
import { ListaVendasComponent } from "../lista-vendas/lista-vendas.component";
import { FormsModule } from '@angular/forms';
import { Produto } from '../models/produto.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-vendas-produtos',
  standalone: true,
  imports: [ListaVendasComponent,FormsModule, CommonModule],
  templateUrl: './vendas-produtos.component.html',
  styleUrl: './vendas-produtos.component.scss'
})

  export class VendasProdutosComponent 
{

  venda: Vendas[] = []; 
  msgProduto = '';
  // codigoProduto : number = 0;
  // nomeProduto = '';
  // precoProduto  = 0;
  // quantidadeProduto = 0;
  quantidadeVenda = 1;
  @Input() produtos: Produto[] = [];
  produtoAtual: Produto = new Produto( 0, '',0, 0);
  
  localizarProduto() : Produto | null | undefined
  { 
    // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry)  
    const itemProdutos = this.produtos.find(v => v.codigo.toString() === this.produtoAtual.codigo.toString())
    
    if (itemProdutos) 
    {
      // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario 
    // Limpa os campos do formulario 
    this.produtoAtual.codigo = itemProdutos.codigo;
    this.produtoAtual.nome = itemProdutos.nome.toUpperCase();
    this.produtoAtual.preco  = itemProdutos.preco;
    this.produtoAtual.quantidade= itemProdutos.quantidade;
    this.quantidadeVenda = 1;

    } else
    {
      this.limparDados();

    }
  return itemProdutos;
  }

  venderProduto()
    {
      let qtdAtual = this.quantidadeVenda;
      const produtoLocalizado = this.localizarProduto();
      if (produtoLocalizado) 
      {
        this.quantidadeVenda = qtdAtual;
        if (this.quantidadeVenda > this.produtoAtual.quantidade) 
      {
        this.msgProduto = 'Quantidade de produto indisponivel';
        return; 
      }
      // .toUpperCase() serve para adicionar letra maiuscula.
        const produtoNovo = new Vendas(produtoLocalizado.codigo, produtoLocalizado.nome.toUpperCase(),produtoLocalizado.preco, produtoLocalizado.quantidade,this.quantidadeVenda); 
        this.venda.push(produtoNovo);
        this.limparDados();
        
      }
      
    }

    limparDados()
    {
      // this.produtoAtual.codigo = 0;
      // this.produtoAtual.nome = '';
      // this.produtoAtual.preco  = 0;
      // this.produtoAtual.quantidade= 0;
      this.produtoAtual = new Produto(0,'',0,0);
      this.quantidadeVenda = 1;
      this.msgProduto = '';

    }
  // preencherVenda($event: Vendas) 
  // {
  //   // No caso vai atualizar o produtoSelecionado que foi escolhido
  //   // this.vendaSelecionado = $event;

  //   //No caso vai preencher o valores do formularios 
  //   this.codigoProduto = $event.codigoProduto;
  //   this.nomeProduto = $event.nomeProduto;
  //   this.precoProduto = $event.precoProduto;
  //   this.quantidadeProduto = $event.quantidadeProduto;
  //   this.quantidadeVenda = $event.quantidadeVenda;
  // }
}