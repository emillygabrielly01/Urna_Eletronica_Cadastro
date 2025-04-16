import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { BarraComponent } from "../barra/barra.component";
import { Router } from '@angular/router';
import { ListaCadastrosAjudantesComponent } from "../lista-cadastros-ajudantes/lista-cadastros-ajudantes.component";
import { CandidatosService } from '../servics/candidato.services';
import { Professor } from '../models/professor.model';
import { Candidato } from '../models/candidato.model';
import { Ajudante } from '../models/ajudadnte.model';

@Component
({
  selector: 'app-cadastro-ajudante',
  standalone: true,
  imports: [CadastroComponent, BarraComponent, ListaCadastrosAjudantesComponent],
  templateUrl: './cadastro-ajudante.component.html',
  styleUrl: './cadastro-ajudante.component.scss'
})
export class CadastroAjudanteComponent implements OnChanges
{
  // Propriedade para armazenar o professor atual.
  public professorAtual: Professor;
  // Inicializa o ajudante atual.
  // para inicializar uma variavel eu preciso ultizar o new.
  public ajudanteAtual = new  Ajudante('','');

  constructor(private router: Router, private service: CandidatosService)
  {
    // Loga o nome do professor selecionado
    console.log('O usuário selecionou o professor: ' + service.professor.nome);
    // Define o professor atual com o professor do service.
    this.professorAtual = service.professor
  }

   
  // Método chamado quando há mudanças nas propriedades de entrada
  ngOnChanges(changes: SimpleChanges): void 
  {
    
  }

  
  // Método para navegar de volta à página inicial.
  voltar()
  {
    // Navega para a URL Inicial.
    this.router.navigateByUrl('/')
  }

  
  // Método para incluir um novo ajudante.
  incluirAjudante(ajudante : Candidato)
  {
    // Cria um novo ajudante com os dados do candidato.
    const novoAjudante = new Ajudante(ajudante.nome,ajudante.numero)
    // Adiciona o novo ajudante à lista de ajudantes do professor atual
    this.professorAtual.ajudantes.push(novoAjudante);
    //voltar daqui pq não está carregando a lista no componente lista-cadastr-ajudates
    // this.professorAtual.ajudantes = [...this.professorAtual.ajudantes]
    // Atualiza o ajudante atual com o novo ajudante
    this.ajudanteAtual = novoAjudante;
    // setTimeout(() => {
    //   this.ajudanteAtual.nome ='';
    //   this.ajudanteAtual.numero = '';  
    // }, 500);
  }

  // Método para editar um ajudante existente
  editarAjudante(ajudanteParametro:Ajudante)
  {
    // Loga o ajudante que está sendo editado
    console.log(ajudanteParametro);
    // Atualiza o ajudante atual com o ajudante 
    this.ajudanteAtual = ajudanteParametro;
  }
}