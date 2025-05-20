import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Produto} from '../models/produto.model';
import { VendasProdutosComponent } from "../vendas-produtos/vendas-produtos.component";
import { MatIconModule } from '@angular/material/icon';
import { Vendas } from '../models/vendas.model';

 
@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MeuComponente2Component, MatIconModule, CommonModule, FormsModule, VendasProdutosComponent],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss' 
})
export class MeuComponenteComponent 
{
  msgProduto = '';
  quanidade= 0;  
  nomeProduto = '';
  precoProduto = 0;
  codigoProduto = 0;
  produtos : Produto [] =  [ 
    new Produto (1,'biscoito',1,3),
    new Produto (2,'arroz',3.5,5),
    new Produto (3,'feijão',8.2,9),
  ];
  produtoSelecionado: Produto = new Produto(0,'',0,0);
  vendas : Vendas [] = [];

  //Metodo que esta no caso gravando um novo produto e editando um produto ja existente
  gravarProduto() 
  {
    // .some e um metodo que vai verifica se algum item da lista(array) atende a condição passada se for encontrada vai retornar true.
    if (this.produtos.find(p => p.nome.toLowerCase() === this.nomeProduto.toLowerCase() )) 
    {
      this.msgProduto = 'Produto já existe.';
      this.quanidade = 0;
      this.nomeProduto = '';
      this.precoProduto = 0;
      this.codigoProduto = 0;
      return;
    }
    
    // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry)  
    const itemProdutos = this.produtos.find(p => p.nome === this.produtoSelecionado.nome)

    if (itemProdutos) 
    {
     // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado  
      itemProdutos.nome = this.nomeProduto;
      itemProdutos.preco = this.precoProduto;
      itemProdutos.quantidade = this.quanidade;
      itemProdutos.codigo = this.codigoProduto;
    } 

    else
    {
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario
      const produtoNovo = new Produto(this.codigoProduto,this.nomeProduto, this.precoProduto, this.quanidade); 
      // Adiciona esse novo produto criado a lista de produtos
      this.produtos.push(produtoNovo);

      const venda: Vendas = 
      {
        codigoProduto: produtoNovo.codigo,
        nomeProduto: produtoNovo.nome,
        precoProduto: produtoNovo.preco,
        quantidadeProduto: produtoNovo.quantidade,
        quantidadeVenda: 0,
      };
        this.vendas.push(venda);
    }
    // Limpa os campos do formulario 
    this.nomeProduto = '';
    this.precoProduto = 0;
    this.quanidade = 0;
    this.codigoProduto = 0;
  }

   // Metodo que vai preencher o fomulario 
   preencherProduto($event: Produto) 
   {
     // No caso vai atualizar o produtoSelecionado que foi escolhido
     this.produtoSelecionado = $event;
     //No caso vai preencher o valores do formularios 
     this.nomeProduto = $event.nome;
     this.precoProduto = $event.preco;
     this.quanidade= $event.quantidade;
     this.codigoProduto =$event.codigo;
   
    // this.tarefa = $event.nomeTarefa;
    // this.tempoTarefa = $event.tempotarefa;
    // this.descricaoTarefa = $event.descricaoTarefa;
    // this.idTarefa = $event.idtarefa; 
   }


   adicionarVenda(produto: Produto) {
  this.produtos.push(produto);

  // Cria uma venda baseada no produto cadastrado
  const novaVenda: Vendas = {
    codigoProduto: produto.codigo,
    nomeProduto: produto.nome,
    precoProduto: produto.preco,
    quantidadeProduto: produto.quantidade,
    quantidadeVenda: 0 // Começa com zero vendido
  };
  this.vendas.push(novaVenda);
   }
  }
  // novaTarefa()
  // {
  //   // incluind
  //   if (this.idTarefa === 0) 
  //   {
  //   const novaTarefa = new Tarefa(this.idTarefa, this.descricaoTarefa, this.tarefa, this.tempoTarefa, 'Penden te');
  //   novaTarefa.idtarefa = this.tarefas.length + 1;
  //   this.tarefas.push(novaTarefa);
  //   } 
  //   else
  //   {
  //     const ItemDaLista = this.tarefas.find(mt => mt.idtarefa === this.idTarefa );
  //     if (ItemDaLista) {
  //       ItemDaLista.nomeTarefa = this.tarefa;
  //       ItemDaLista.tempotarefa = this.tempoTarefa;
  //       const tarefa = this.tarefas.find(t => t.idtarefa === ItemDaLista.idtarefa);
  //       if (ItemDaLista) 
  //       {return
  //       }else{}}}
  //     this.tarefa = '';
  //     this.descricaoTarefa = '';
  //     this.idTarefa = 0;
  //     this.tempoTarefa = 0;
  //   }
