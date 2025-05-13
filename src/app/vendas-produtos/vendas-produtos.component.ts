import { Component, EventEmitter, Input, Output } from '@angular/core';
import { vendas } from '../models/vendas.model';
import { ListaVendasComponent } from "../lista-vendas/lista-vendas.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendas-produtos',
  standalone: true,
  imports: [ListaVendasComponent,FormsModule],
  templateUrl: './vendas-produtos.component.html',
  styleUrl: './vendas-produtos.component.scss'
})

  export class VendasProdutosComponent 
{
  msgVendas = '';
  codigoVendas = 0;
  nomeVendas = '';
  precoVendas  = 0;
  qtdVendas  = 0;
  venda : vendas [] = [];
  vendaSelecionado: vendas = new vendas('', 0, 0, 0);

  
  venderProduto() 
  {
    // .some e um metodo que vai verifica se algum item da lista(array) atende a condição passada se for encontrada vai retornar true.
    if (this.venda.find(p => p.nome.toLowerCase() === this.nomeVendas.toLowerCase())) 
    {
      this.msgVendas = 'Produto já existe.';
      this.codigoVendas = 0;
      this.nomeVendas = '';
      this.qtdVendas  = 0;
      this.precoVendas  = 0;
      return;
       
    }
    // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry)  
    const itemProdutos = this.venda.find(v => v.nome === this.vendaSelecionado.nome)
  
    if (itemProdutos) 
    {
      // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado
      itemProdutos.codigo = this.codigoVendas;
      itemProdutos.nome = this.nomeVendas;
      itemProdutos.preco = this.precoVendas;
      itemProdutos.qtd = this.qtdVendas;
    } 
  
    else
    {
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario
      const produtoNovo = new vendas(this.nomeVendas,this.codigoVendas, this.precoVendas, this.qtdVendas); 
      // Adiciona esse novo produto criado a lista de venda
      this.venda.push(produtoNovo);
    }
  
    // Limpa os campos do formulario 
    this.codigoVendas = 0;
    this.nomeVendas = '';
    this.qtdVendas  = 0;
    this.precoVendas  = 0;
  }

preencherVenda($event: vendas) 
{
  // No caso vai atualizar o produtoSelecionado que foi escolhido
  this.vendaSelecionado = $event;

  //No caso vai preencher o valores do formularios 
  this.codigoVendas = $event.codigo;
  this.nomeVendas = $event.nome;
  this.precoVendas = $event.preco;
  this.qtdVendas = $event.qtd
}
}