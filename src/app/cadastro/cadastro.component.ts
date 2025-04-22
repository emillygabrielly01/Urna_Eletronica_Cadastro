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

  // Este Input usa uma variavel com tipo de dados personalizados ou seja ela só aceita valores 'Cadastro de Ajudantes' ou 'Cadastro de Professores'
  // O tipo de dado personalizado e separado pelo caractere |
  // A quantidade de opções pode ser duas ou mais opções separadas por |
  @Input() tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';

  // variavel primitiva é composta da seginte maneira
  // nome da variavel: tipo do dado
  // Quando vamos inicializar o valor de uma variavel primitiva basta usar o sinal de igual seguindo do valor como mostra o exemplo abaixo
    // nome da variavel: tipo do dado = valor desejado
  nomelabel: string = '';
  caixaMarcada: boolean = true;
  // A estrutura do @Input é composta por @Input() + estrutura da variavel
  // Ela e usada dentro do html de outo componente usando [candidatoAtual]
  @Input() candidatoAtual = new Candidato('','');

  // A estrutura do Output é composta por @Output() + nome do Output  = new EventEmitter<Candidato>();
  // Ela é usada dentro do html de outro componente usando (cadidato)
  // Para disparar o Output, deve usar a seguinte instrução:
  // this.cadidato.emit(seu valor do dado)
  @Output() candidato  = new EventEmitter<Candidato>();
  
  // Método executado após a inicialização da visualização.
  ngAfterViewInit(): void 
  {
    this.meuMetodo();
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
  
  //  Um metodo e composto por um nome, seguido de () e seguido de {}, e as chaves e o local que sera implementado o código 
  // Este metodo abaixo não retornar nenhum valor, ele simplismente execulta o código que está dentro
  meuMetodo()
  {
   const variavelComRetorno = this.meuMetodoComRetornaDados();
   console.log(variavelComRetorno);
  
   const variavelComRetornoBaseadoEmParametros = this.meuMetodoComRetornaDadosEComParametros('Emilly', 20, true);
   console.log(variavelComRetornoBaseadoEmParametros);
  }

  //  Este metodo retorna um valor do tipo string, neste caso o valor retornado é 'Emilly.
  meuMetodoComRetornaDados() : string
  {
    return 'Emilly';
  }

    //  Este metodo retorna um valor do tipo string, neste caso o valor retornado é 'Emilly.
    meuMetodoComRetornaDadosEComParametros(parametro1:string,parametro2:number,parametro3:boolean) : string
    {
      return 'Meu Nome é' + parametro1 + ' e tenho ' + parametro2 + ' e esse bilhete é ' + parametro3;
    }
    
  // Método chamado ao clicar no botão, emitindo o candidato atual.
  botaoClicado() 
  {
    this.candidato.emit(this.candidatoAtual);
  }
}