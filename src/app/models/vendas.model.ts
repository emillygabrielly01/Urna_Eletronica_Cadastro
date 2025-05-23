export class Vendas
{
  constructor
  ( 
   public codigoProduto: number,
   public nomeProduto: string,
   public precoProduto: number,
   public quantidadeProduto: number,
   public quantidadeVenda: number,
  )
  {
  }
}