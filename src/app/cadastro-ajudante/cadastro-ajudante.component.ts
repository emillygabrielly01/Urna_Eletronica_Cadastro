import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { BarraComponent } from "../barra/barra.component";
import { Router } from '@angular/router';
import { ListaCadastrosAjudantesComponent } from "../lista-cadastros-ajudantes/lista-cadastros-ajudantes.component";
import { NgIf } from '@angular/common';
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
 
   professorAtual!: Professor;
   ajudanteAtual!: Ajudante;
   constructor(private router: Router, private service: CandidatosService)
   {

  console.log('O usuário selecionou o professor: ' + service.professor.nome);
  this.professorAtual = service.professor;
   }
  ngOnChanges(changes: SimpleChanges): void 
  {
    
  }

   voltar()
   {
     this.router.navigateByUrl('/')
   }

   incluirAjudante(ajudante : Candidato)
   {

     const novoAjudante = new Ajudante(ajudante.nome,ajudante.numero)
    
      this.professorAtual.ajudantes.push(novoAjudante);
      //voltar daqui pq não está carregando a lista no componente lista-cadastr-ajudaten
      // this.professorAtual.ajudantes = [...this.professorAtual.ajudantes]
      this.ajudanteAtual = novoAjudante;
      // setTimeout(() => {
      //   this.ajudanteAtual.nome ='';
      //   this.ajudanteAtual.numero = '';
        
      // }, 500);
   }
  }
