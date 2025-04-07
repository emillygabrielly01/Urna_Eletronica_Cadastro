import { Ajudante } from "./ajudadnte.model";
import { Candidato } from "./candidato.model";

export class Professor extends Candidato
{
    public ajudantes: Ajudante[] = [];
    public static GetAll() : Professor[]
    {  
       var professores =  
        [
          new Professor('Pedro',  '100'),
          new Professor('Tiago',  '101'),
          new Professor('João', '102'),
          new Professor('Cleverton', '110')
        ];

        return professores;
    }
}