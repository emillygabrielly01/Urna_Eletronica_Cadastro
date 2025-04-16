import { Candidato } from "./candidato.model";

export class Ajudante extends Candidato
{
  public static GetAll() : Ajudante[]
  {  
    var professores =  
    [
      new Ajudante('Ana',  '108'),
      new Ajudante('Shopia',  '109'),
      new Ajudante('Joabe', '110'),
    ];
    return professores;
  }
    
}