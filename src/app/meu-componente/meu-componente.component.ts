import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto.model';


@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MeuComponente2Component, CommonModule, FormsModule, ],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss'
})
export class MeuComponenteComponent 
{
  qtdProduto = 1;
  nomeProduto = '';
  precoProduto = 0;
  produtos : Produto [] = [];
  produtoSelecionado: Produto = new Produto('',0,1);


  //Metodo que esta no caso gravando um novo produto e editando um produto ja existente
  gravarProduto() 
  {
     // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry)  
    const itemProdutos = this.produtos.find(p => p.nome === this.produtoSelecionado.nome)
    if (itemProdutos) 
    {
     // No caso se encontrar o produto e for editar ele vai retornar o produto para ser editado
      itemProdutos.nome = this.nomeProduto;
      itemProdutos.preco = this.precoProduto;
      itemProdutos.qtd = this.qtdProduto;
    } 

    else
    {
      // E se no caso nao encontrar o valor adicionado significa que e um produto novo
      // E cria um novo produto com os valores que foram preencidos no formulario
      const produtoNovo = new Produto(this.nomeProduto, this.precoProduto, this.qtdProduto); 
      // Adiciona esse novo produto criado a lista de produtos
      this.produtos.push(produtoNovo);
    }
    // Limpa os campos do formulario 
    this.nomeProduto = '';
    this.precoProduto = 0;
    this.qtdProduto = 1;
  }

   // Metodo que vai preencher o fomulario 
   preencherProduto($event: Produto) 
   {
     // No caso vai atualizar o produtoSelecionado que foi escolhido
     this.produtoSelecionado = $event;
 
     //No caso vai preencher o valores do formularios 
     this.nomeProduto = $event.nome;
     this.precoProduto = $event.preco;
     this.qtdProduto = $event.qtd;
   
    // this.tarefa = $event.nomeTarefa;
    // this.tempoTarefa = $event.tempotarefa;
    // this.descricaoTarefa = $event.descricaoTarefa;
    // this.idTarefa = $event.idtarefa; 
   }

  // novaTarefa()
  // {
  //   // incluind
  //   if (this.idTarefa === 0) 
  //   {
  //   const novaTarefa = new Tarefa(this.idTarefa, this.descricaoTarefa, this.tarefa, this.tempoTarefa, 'Pendente');
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
}