import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Ajudante } from '../models/ajudadnte.model';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-lista-cadastros-ajudantes',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './lista-cadastros-ajudantes.component.html',
  styleUrl: './lista-cadastros-ajudantes.component.scss'
})
export class ListaCadastrosAjudantesComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['nomeAjudante', 'numero','editar','excluir'];
  dataSource = new MatTableDataSource<Ajudante>();

  constructor(private router: Router) 
  {

  }

  ngOnInit(): void 
  {
      
  }
  
  ngAfterViewInit(): void 
  {
    this.dataSource.data = Ajudante.GetAll();
  }
  

  cadastrarAjudante() 
  {
    this.router.navigateByUrl('/cadastro/ajudante');
  }


}


