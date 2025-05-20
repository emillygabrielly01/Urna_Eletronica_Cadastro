import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vendas } from '../models/vendas.model';
import { ListaVendasComponent } from "../lista-vendas/lista-vendas.component";
import { FormsModule } from '@angular/forms';
import { Produto } from '../models/produto.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vendas-produtos',
  standalone: true,
  imports: [ListaVendasComponent,FormsModule, ],
  templateUrl: './vendas-produtos.component.html',
  styleUrl: './vendas-produtos.component.scss'
})

  export class VendasProdutosComponent 
{

  venda: Vendas[] = []; 
  msgProduto = '';
  codigoProduto : number = 0;
  nomeProduto = '';
  precoProduto  = 0;
  quantidadeProduto = 0;
  quantidadeVenda = 1;
  @Input() produtos: Produto[] = [];
  // vendaSelecionado: Vendas = new Vendas( 0, '',0, 0, 0);
  
  localizarProduto() : Produto | null | undefined
  { 
    // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry)  
    const itemProdutos = this.produtos.find(v => v.codigo.toString() === this.codigoProduto.toString())
    
    if (itemProdutos) 
    {
      // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario 
    // Limpa os campos do formulario 
    this.codigoProduto = itemProdutos.codigo;
    this.nomeProduto = itemProdutos.nome;
    this.precoProduto  = itemProdutos.preco;
    this.quantidadeProduto = itemProdutos.quantidade;
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
        if (this.quantidadeVenda > this.quantidadeProduto) 
      {
        this.msgProduto = 'Quantidade de produto indisponivel';
        return; 
      }
        const produtoNovo = new Vendas(produtoLocalizado.codigo, produtoLocalizado.nome,produtoLocalizado.preco, produtoLocalizado.quantidade,this.quantidadeVenda); 
        this.venda.push(produtoNovo);
        this.limparDados();
        
      }
      
    }

    limparDados()
    {
      this.codigoProduto = 0;
      this.nomeProduto = '';
      this.precoProduto  = 0;
      this.quantidadeProduto = 0;
      this.quantidadeVenda = 1;
      this.msgProduto = '';
    }
  preencherVenda($event: Vendas) 
  {
    // No caso vai atualizar o produtoSelecionado que foi escolhido
    // this.vendaSelecionado = $event;

    //No caso vai preencher o valores do formularios 
    this.codigoProduto = $event.codigoProduto;
    this.nomeProduto = $event.nomeProduto;
    this.precoProduto = $event.precoProduto;
    this.quantidadeProduto = $event.quantidadeProduto;
    this.quantidadeVenda = $event.quantidadeVenda;
  }
}