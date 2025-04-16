import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Candidato } from '../models/candidato.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BarraComponent } from "../barra/barra.component";
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component
({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatDividerModule, FotoComponent, FormsModule, CommonModule, MatCheckboxModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements AfterViewInit 
{
  // Usa @Input para receber dados. 
  // O @Output para emitir eventos.
  @Input() tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';
  // variavel
  nomelabel: string = '';
  caixaMarcada: boolean = true;

  @Input() candidatoAtual = new Candidato('','');

  @Output() candidato  = new EventEmitter<Candidato>();
  
  // Método executado após a inicialização da visualização.
  ngAfterViewInit(): void 
  {
    // O ternario Faz a mesma coisa que o if e o else que esta abaixo.
    // o ternario so serve para colocar uma instrução de codigo.
    setTimeout(() =>
    {
      // Define o valor de 'nomelabel' com base no tipo de cadastro após 1 segundo
      this.nomelabel= this.tipoCadastro === 'Cadastro de Professores' ? 'Professor' : 'Ajudante';
    }, 1000);
    // if (this.tipoCadastro === 'Cadastro de Professores') {
    //   this.nomelabel = 'Professor';
    // } else {
    //   this.nomelabel = 'Ajudante';
    // }
  }
  
  // Método chamado ao clicar no botão, emitindo o candidato atual.
  botaoClicado() 
  {
    this.candidato.emit(this.candidatoAtual);
  }
}