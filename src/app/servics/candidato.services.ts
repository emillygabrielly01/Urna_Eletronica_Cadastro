import { Injectable } from "@angular/core";
import { Professor } from "../models/professor.model";

@Injectable({ providedIn: 'root'})
export class CandidatosService
{
    public professor!:  Professor;
    public professores : Professor []= [];
    
}