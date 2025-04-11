import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Ajudante } from '../models/ajudadnte.model';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Professor } from '../models/professor.model';



@Component
({
  selector: 'app-lista-cadastros-ajudantes',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './lista-cadastros-ajudantes.component.html',
  styleUrl: './lista-cadastros-ajudantes.component.scss'
})

export class ListaCadastrosAjudantesComponent implements OnInit, AfterViewInit, OnChanges
{
  @ViewChild(MatTable) minhaTabela!: MatTable<Ajudante>;
  // @Input() professor! : Professor;
  @Input() ajudantes! : Ajudante [];
  @Input() novoAjudante!: Ajudante;
  displayedColumns: string[] = ['nomeProfessor', 'numero','editar','excluir'];
  dataSource = new MatTableDataSource<Ajudante>();

  //ngonchanges - houve alguma mudança nos input ( que no nosso caso é o de ajudantes )

  constructor(private router: Router)
  {

  }
  ngOnChanges(changes: SimpleChanges): void 
  {
    const { ajudantes, novoAjudante} = changes;
    if (novoAjudante) {
      
      if (novoAjudante.currentValue !== novoAjudante.previousValue) {
        this.minhaTabela.renderRows();
      }
    }  

    if (ajudantes) {
      if (ajudantes.currentValue !== ajudantes.previousValue) {
        this.dataSource.data = ajudantes.currentValue;
      }
    }
  }

  ngOnInit(): void 
  {
    
  }

  ngAfterViewInit(): void 
  {

     setTimeout(() => {
      
     }, 500);
    
  }
  cadastrarAjudante() 
{
   this.router.navigateByUrl('cadastro/professor/:professorid/ajudantes')
}
}