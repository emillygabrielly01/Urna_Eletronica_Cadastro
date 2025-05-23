import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vendas } from '../models/vendas.model';
import { Produto} from '../models/produto.model';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VendasProdutosComponent } from "../vendas-produtos/vendas-produtos.component";
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
 
@Component
({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MeuComponente2Component, MatIconModule, CommonModule, FormsModule, VendasProdutosComponent],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss' 
})

// Aqui começa o meu componente Angular.
export class MeuComponenteComponent 
{
  // Variável para armazenar a quantidade do produto.
  quanidade= 0; 
  // Variáveis para armazenar a mensagens desejada.
  msgProduto = '';
  // nomeProduto = '';
  // precoProduto = 0;
  // codigoProduto = 0;
  // Lista de vendas realizadas.
  vendas : Vendas [] = [];
  // Produto que está sendo editado ou criado no momento.
  produtoSelecionado: Produto = new Produto(0,'',0,0);
  // Lista inicial de produtos disponíveis.
  produtos : Produto [] =  
  [
    new Produto (1,'biscoito',1,3), 
    new Produto (2,'arroz',3.5,5), 
    new Produto (3,'feijão',8.2,9),
  ];
  

   // Método para gravar (salvar) um novo produto ou editar um existente.
  gravarProduto() 
  {
    // .some e um metodo que vai verifica se algum item da lista(array) atende a condição passada se for encontrada vai retornar true.
    // Verifico se já existe um produto com o mesmo nome (ignorando maiúsculas/minúsculas).
    if (this.produtos.find(p => p.nome.toLowerCase() === this.produtoSelecionado.nome.toLowerCase() )) 
    {
      // Se já existir, exibo mensagem e limpo os campos.
      this.msgProduto = 'Produto já existe.';
      this.quanidade = 0;
      // this.nomeProduto = '';
      // this.precoProduto = 0;
      // this.codigoProduto = 0;
      this.produtoSelecionado = new Produto(0,'',0,0);
      return;
    }
    // find retorna o item da lista completo, mostrando todos os dados
    // Esta no caso verificando se existe um produto na lista(arry) ]
    // Verifico se o produto já existe exatamente com o mesmo nome. 
    const itemProdutos = this.produtos.find(p => p.nome === this.produtoSelecionado.nome)

    if (itemProdutos) 
    {
     // Se encontrar, atualizo os dados do produto existente.
      itemProdutos.quantidade = this.quanidade;
      itemProdutos.nome = this.produtoSelecionado.nome;
      itemProdutos.preco = this.produtoSelecionado.preco;
      itemProdutos.codigo = this.produtoSelecionado.codigo;
    } 

    else
    {
      // Se não encontrar, crio um novo produto com os dados informados.
      const produtoNovo = new Produto(this.produtoSelecionado.codigo,this.produtoSelecionado.nome, this.produtoSelecionado.preco, this.quanidade); 
      // Adiciono o novo produto à lista.
      this.produtos.push(produtoNovo);

      // Crio uma nova venda com base no produto adicionado
      const venda: Vendas = 
      {
        quantidadeVenda: 0,
        nomeProduto: produtoNovo.nome,
        precoProduto: produtoNovo.preco,
        codigoProduto: produtoNovo.codigo,
        quantidadeProduto: produtoNovo.quantidade,
        
      };
      // Adiciono a venda à lista de vendas
      this.vendas.push(venda);
    }
    // Limpa os campos do formulario 
    // this.nomeProduto = '';
    // this.precoProduto = 0;
    // this.quanidade = 0;
    // this.codigoProduto = 0;

    // Limpo o formulário para novo cadastro.
    this.produtoSelecionado = new Produto(0,'',0,0);
  }

  // Método para preencher o formulário com os dados de um produto selecionado.
  preencherProduto($event: Produto) 
  {
    // Atualizo o produto selecionado com os dados recebidos.
    this.produtoSelecionado = $event;
    this.quanidade= $event.quantidade;
    this.produtoSelecionado.nome = $event.nome;
    this.produtoSelecionado.preco = $event.preco;
    this.produtoSelecionado.codigo =$event.codigo;
   
    // this.tarefa = $event.nomeTarefa;
    // this.tempoTarefa = $event.tempotarefa;
    // this.descricaoTarefa = $event.descricaoTarefa;
    // this.idTarefa = $event.idtarefa; 
  }

  // Método para adicionar uma nova venda com base em um produto
  adicionarVenda(produto: Produto) 
  { 
    // Adiciono o produto à lista de produtos.
    this.produtos.push(produto);

    // Crio uma nova venda com os dados do produto.
    const novaVenda: Vendas = 
    {
      quantidadeVenda: 0,
      nomeProduto: produto.nome,
      precoProduto: produto.preco,
      codigoProduto: produto.codigo,
      quantidadeProduto: produto.quantidade,
    };
    
    // Adiciono a nova venda à lista de vendas.
    this.vendas.push(novaVenda);
  }
}
// novaTarefa()
// {// if (this.idTarefa === 0){
// Const novaTarefa = new Tarefa(this.idTarefa, this.descricaoTarefa, this.tarefa, this.tempoTarefa, 'Penden te');
// novaTarefa.idtarefa = this.tarefas.length + 1; 
// this.tarefas.push(novaTarefa);}else{
// const ItemDaLista = this.tarefas.find(mt => mt.idtarefa === this.idTarefa );
// if (ItemDaLista) {
// ItemDaLista.nomeTarefa = this.tarefa;
// ItemDaLista.tempotarefa = this.tempoTarefa;
// const tarefa = this.tarefas.find(t => t.idtarefa === ItemDaLista.idtarefa);
// if (ItemDaLista) 
// {return}else{}}}
// this.tarefa = '';
// this.descricaoTarefa = '';
// this.idTarefa = 0;
// this.tempoTarefa = 0;
//}