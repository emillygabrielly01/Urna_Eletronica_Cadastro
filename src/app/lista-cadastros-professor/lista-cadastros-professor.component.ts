import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement 
{
  numero: string;
  editar: string;
  excluir:string;
  ajudante: string;
  nomeProfessor: string;
}

const ELEMENT_DATA: PeriodicElement[] = 
[
  {nomeProfessor: 'Pedro', numero: '100',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: 'Tiago', numero: '101',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: 'João', numero: '102',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',ajudante:'',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',ajudante:'',editar: '', excluir: ''},
];


@Component
({
  selector: 'app-lista-cadastros-professor',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './lista-cadastros-professor.component.html',
  styleUrl: './lista-cadastros-professor.component.scss'
})
export class ListaCadastrosProfessorComponent 
{
  displayedColumns: string[] = ['nomeProfessor', 'numero', 'ajudante', 'editar','excluir'];
  dataSource = ELEMENT_DATA;
}
