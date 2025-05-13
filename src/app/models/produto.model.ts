export class Produto
{
 
  public nome: string = '';
  public preco: number = 0;
  public qtd: number = 0;
  public codigo: number = 0;
  

  constructor( Nome:string, Preco:number, Qtd:number, Codigo: number )
  {
    this.nome = Nome;
    this.preco = Preco;
    this.qtd = Qtd;
    this.codigo = Codigo;
  }

}