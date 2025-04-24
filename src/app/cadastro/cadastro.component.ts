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

  // este input usa uma variavel com tipo de dados personalizado. Ou seja ela só aceita os valores 'Cadastro de Professores', ou 'Cadastro de Ajudantes'.
  // O tipo de dado personalizado é separado pelo caractere  | 
  // A quantidade de opções pode ser duas ou mais opções, separadas por |
  @Input() tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';
   

  // variavel primitiva é composta da seguinte maneira
  // nome da variavel: tipo do dado 
  // Quando vamos inicializar o valor de uma variavel primitiva basta usar o sinal de igual seguindo do valor como mostra o exemplo abaixo
  // nome da variavel: tipo do dado = valor desejado 
  nomelabel: string = '';
  caixaMarcada: boolean = true;

  // A estrutura do @input é composta por @Input() + estrutura da variavel
  // Ela é usada dentro do html de outro componente usando [candidatoAtual]
  @Input() candidatoAtual = new Candidato('','');
  
  // A estrutura do Output é compostapor @Output() + nome do output = new EventEmitter<Tipo de dado>();
  // Ela é usada dentro do html de outro componente usando (candidato)
  // Para desparar o output, deve usar a seguinte instrução: 
  // this.candidato.emit(seu valor do dado)
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
  //O metodo é composto por um nome seguido de () e seguido por {}, as chaves é o local que será implementado o código
  // Este metodo abaixo não retorna nenhum valor, ele simplismente executa o código que está dentro
   meuMetodo(){
     const variavelComRetorno = this.meuMetodoComRetornoDados();
     console.log(variavelComRetorno);

     const variavelComRetornoBaseadoEmParametros = this.meuMetodoComRetornoDadosEComParametros('Ana Luiza', 20, true);
     console.log(variavelComRetornoBaseadoEmParametros);
     
   }
   // Este metodo retorna um valor do tipo string, neste caso está retornando o valor 'Ana Luiza'.
   meuMetodoComRetornoDados():string 
   {
     return 'Ana Luiza';
   }

   meuMetodoComRetornoDadosEComParametros(parametro1:string, parametro2:number, parametro3:boolean):string 
   {
     return 'Meu nome é ' + parametro1 + ' e tenho ' + parametro2 + ' e esse bilhete é ' + parametro3;
   }

  // Método chamado ao clicar no botão, emitindo o candidato atual.
  botaoClicado() 
  {
    this.candidato.emit(this.candidatoAtual);
  }
}