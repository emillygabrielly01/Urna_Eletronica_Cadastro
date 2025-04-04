import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement 
{
  numero: string;
  editar: string;
  excluir:string;
  nomeProfessor: string;
}

const ELEMENT_DATA: PeriodicElement[] = 
[
  {nomeProfessor: 'Ester', numero: '200',editar: '', excluir: ''},
  {nomeProfessor: 'Noemi', numero: '201',editar: '', excluir: ''},
  {nomeProfessor: 'Ana', numero: '203',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',editar: '', excluir: ''},
  {nomeProfessor: '', numero: '',editar: '', excluir: ''},

];

@Component
({
  selector: 'app-lista-cadastros-ajudantes',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './lista-cadastros-ajudantes.component.html',
  styleUrl: './lista-cadastros-ajudantes.component.scss'
})

export class ListaCadastrosAjudantesComponent 
{
  displayedColumns: string[] = ['nomeProfessor', 'numero', 'ajudante', 'editar','excluir'];
  dataSource = ELEMENT_DATA;
}
