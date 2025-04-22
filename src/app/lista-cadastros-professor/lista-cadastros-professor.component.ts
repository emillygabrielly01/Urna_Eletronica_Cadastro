import { Router } from '@angular/router';
import { Professor } from '../models/professor.model';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { CandidatosService } from '../servics/candidato.services';

@Component
({
  selector: 'app-lista-cadastros-professor',
  standalone: true,
  imports: [    MatTableModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule, ],
  templateUrl: './lista-cadastros-professor.component.html',
  styleUrl: './lista-cadastros-professor.component.scss'
})

export class ListaCadastrosProfessorComponent implements OnInit, AfterViewInit 
{
  tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';

  displayedColumns: string[] = ['nomeProfessor', 'numero', 'ajudante', 'editar', 'excluir'];

  dataSource = new MatTableDataSource<Professor>();

  @Output() clicouIcone = new EventEmitter<void>();
 
  constructor(private router: Router, private service: CandidatosService) 
  {
    if (service.professores.length === 0) 
    {
      service.professores = Professor.GetAll(); 
    }
  }

  ngOnInit(): void 
  {

  }

  ngAfterViewInit(): void 
  {
    this.dataSource.data = this.service.professores;
  }

  cadastrarProfessor() 
  {
    this.router.navigateByUrl('/cadastro/professor');
  }

  cadastrarAjudante(element: Professor) 
  {
    this.service.professor = element;
    this.router.navigateByUrl('cadastro/professor/' +  element.numero + '/ajudantes');
  }

  botaoClicado() 
  {
    this.clicouIcone.emit();
  }
}
