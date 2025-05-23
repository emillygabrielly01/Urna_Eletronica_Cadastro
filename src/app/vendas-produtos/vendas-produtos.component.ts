import { FormsModule } from '@angular/forms';
import { Component,Input} from '@angular/core';
import { Vendas } from '../models/vendas.model';
import { Produto } from '../models/produto.model';
import { CommonModule, NgFor } from '@angular/common';
import { ListaVendasComponent } from "../lista-vendas/lista-vendas.component";

@Component
({
  selector: 'app-vendas-produtos',
  standalone: true,
  imports: [ListaVendasComponent,FormsModule, CommonModule],
  templateUrl: './vendas-produtos.component.html',
  styleUrl: './vendas-produtos.component.scss' 
})

  export class VendasProdutosComponent 
{
  // Mensagem para mensagem desejada.
  msgProduto = '';
  // nomeProduto = '';
  // precoProduto  = 0;
  // quantidadeProduto = 0;
  // codigoProduto : number = 0;
 // Variável para armazenar a quantidade de venda.
  quantidadeVenda = 1;
  // Lista de vendas realizadas.
  venda: Vendas[] = []; 
  // Total final das vendas.
  totalVenda: number = 0;
  // Lista de produtos recebida como entrada do componente pai.
  @Input() produtos: Produto[] = [];
  // Produto que está sendo manipulado no momento.
  produtoAtual: Produto = new Produto( 0, '',0, 0);
  
  
  localizarProduto() : Produto | null | undefined
  { 
    // find retorna o item da lista completo, mostrando todos os dados
    // Procura o produto na lista com base no código digitado.
    const itemProdutos = this.produtos.find(v => v.codigo.toString() === this.produtoAtual.codigo.toString())
    
    if (itemProdutos) 
    {
      // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario 
      // Limpa os campos do formulario 
      // Se encontrar, atualiza os dados do produto atual.
      this.quantidadeVenda = 1;
      this.produtoAtual.codigo = itemProdutos.codigo;
      this.produtoAtual.nome = itemProdutos.nome.toUpperCase();
      this.produtoAtual.preco  = itemProdutos.preco;
      this.produtoAtual.quantidade= itemProdutos.quantidade;
    } 
    else
    {
      // Se não encontrar, limpa os dados do formulário.
      this.limparDados();
    }
    return itemProdutos;
  }

  venderProduto()
  {
    // Salva a quantidade atual antes de localizar novamente o produto.
    let qtdAtual = this.quantidadeVenda;
    // Tenta localizar o produto com base no código.
    const produtoLocalizado = this.localizarProduto();

    if (produtoLocalizado) 
    {
      this.quantidadeVenda = qtdAtual;
      // Verifica se a quantidade desejada está disponível
      if (this.quantidadeVenda > this.produtoAtual.quantidade) 
      {
        this.msgProduto = 'Quantidade de produto indisponivel';
        return; 
      }
      // .toUpperCase() serve para adicionar letra maiuscula.
      // Cria uma nova venda com os dados do produto localizado.
      const produtoNovo = new Vendas(produtoLocalizado.codigo, produtoLocalizado.nome.toUpperCase(),produtoLocalizado.preco, produtoLocalizado.quantidade,this.quantidadeVenda); 
      // Adiciona a venda à lista.
      this.venda.push(produtoNovo);
      // Limpa os dados do formulário.
      this.limparDados();
    }
  }

  //Metodo para Limpar os dados.
  limparDados()
  {
    // this.produtoAtual.codigo = 0;
    // this.produtoAtual.nome = '';
    // this.produtoAtual.preco  = 0;
    // this.produtoAtual.quantidade= 0;
    // Limpa a mensagem e reseta a quantidade.
    this.msgProduto = '';
    this.quantidadeVenda = 1;
    // Recalcula o total da venda.
    this.calcularTotalVenda();
    // Reseta o produto atual.
    this.produtoAtual = new Produto(0,'',0,0);
  }

  // Metodo para calcular o total da venda.
  calcularTotalVenda(): number
  {
    // Zera o total antes de somar.
    this.totalVenda = 0;
    // Soma o valor de cada venda (preço * quantidade).
    this.venda.forEach
    (iv => 
      {
        this.totalVenda = this.totalVenda + (iv.precoProduto * iv.quantidadeVenda);
      }
    );
    return this.totalVenda;
  }
}
  // preencherVenda($event: Vendas) 
  // { No caso vai atualizar o produtoSelecionado que foi escolhido
  //   // this.vendaSelecionado = $event;
  //   //No caso vai preencher o valores do formularios 
  //   this.codigoProduto = $event.codigoProduto;
  //   this.nomeProduto = $event.nomeProduto;
  //   this.precoProduto = $event.precoProduto;
  //   this.quantidadeProduto = $event.quantidadeProduto;
  //   this.quantidadeVenda = $event.quantidadeVenda;
  // }
