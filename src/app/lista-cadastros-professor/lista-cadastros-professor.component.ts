import { Router } from '@angular/router';
import { Professor } from '../models/professor.model';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component
({
  selector: 'app-lista-cadastros-professor',
  standalone: true,
  imports: [MatTableModule,MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,],
  templateUrl: './lista-cadastros-professor.component.html',
  styleUrl: './lista-cadastros-professor.component.scss'
})
export class ListaCadastrosProfessorComponent implements OnInit, AfterViewInit
{
 
  displayedColumns: string[] = ['nomeProfessor', 'numero', 'ajudante', 'editar','excluir'];
  dataSource = new MatTableDataSource<Professor>();

  constructor(private router: Router)
  {
   
  }
  ngOnInit(): void 
  {
    
  }

  ngAfterViewInit(): void 
  {
   this.dataSource.data = Professor.GetAll();
  }

  cadastrarProfessor() 
  {
    this.router.navigateByUrl('/cadastro/professor')
  }

}
