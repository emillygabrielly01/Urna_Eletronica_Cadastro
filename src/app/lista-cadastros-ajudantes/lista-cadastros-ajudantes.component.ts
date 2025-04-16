import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Ajudante } from '../models/ajudadnte.model';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Professor } from '../models/professor.model';
import { MatIconModule } from '@angular/material/icon';



@Component
({
  selector: 'app-lista-cadastros-ajudantes',
  standalone: true,
  imports: [MatTableModule,MatIconModule ],
  templateUrl: './lista-cadastros-ajudantes.component.html',
  styleUrl: './lista-cadastros-ajudantes.component.scss'
})

export class ListaCadastrosAjudantesComponent implements OnInit, AfterViewInit, OnChanges
{
  // Referência à tabela do Angular Material
  @ViewChild(MatTable) minhaTabela!: MatTable<Ajudante>;

  // @Input() professor! : Professor;
  // Propriedade de entrada para a lista de ajudantes
  @Input() ajudantes! : Ajudante [];

  //Propriedade de entrada para o novo ajudante
  @Input() novoAjudante!: Ajudante;

  // Colunas exibidas na tabela
  displayedColumns: string[] = ['nomeProfessor', 'numero','editar','excluir'];

  dataSource = new MatTableDataSource<Ajudante>();

  //ngonchanges - houve alguma mudança nos input ( que no nosso caso é o de ajudantes)
  // Evento de saída para editar ajudante
  @Output() editar = new EventEmitter<Ajudante>;

  // Construtor que injeta o serviço de roteamento
  constructor(private router: Router)
  {

  }

  
  // Método chamado quando há mudanças nas propriedades de entrada
  ngOnChanges(changes: SimpleChanges): void 
  {
    const { ajudantes, novoAjudante} = changes;
    // Verifica se houve mudança no novo ajudante
    if (novoAjudante) 
    {
      if (novoAjudante.currentValue !== novoAjudante.previousValue) 
      {
        if(this.minhaTabela)
        {
          debugger;
          
         // Renderiza as linhas da tabela novamente
         this.minhaTabela.renderRows();
        }
      }
    }  
    
    // Verifica se houve mudança na lista de ajudantes
    if (ajudantes) 
    {
      if (ajudantes.currentValue !== ajudantes.previousValue) 
      {
        // Atualiza a fonte de dados da tabela
        this.dataSource.data = ajudantes.currentValue;
      }
    }
  }

  
  // Método chamado na inicialização do componente
  ngOnInit(): void 
  {
    
  }

  // Método chamado após a visualização ser inicializada
  ngAfterViewInit(): void 
  {
    // Placeholder para código executado após a visualização ser inicializada 
    setTimeout(() => 
    {
      
    }, 500);
  }

  // Método para navegar para a página de cadastro de ajudantes
  cadastrarAjudante() 
  {
    // Navega para a URL de cadastro de ajudantes
    this.router.navigateByUrl('cadastro/professor/:professorid/ajudantes')
  }

  // Método para editar um ajudante
  editarAjudante(ajudanteparametro:Ajudante)
  {
    // Loga o ajudante que está sendo editado
    console.log(ajudanteparametro);
    
    // Emite o evento de edição com o ajudante
    this.editar.emit(ajudanteparametro)
  }
}