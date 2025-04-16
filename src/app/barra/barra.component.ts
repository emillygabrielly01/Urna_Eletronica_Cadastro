import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component
({
  selector: 'app-barra',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss'
})
export class BarraComponent 
{
  // O @Input() permite que um componente receba dados de seu componente pai. É como passar informações de um componente maior para um componente menor.
  // No caso este Input define o tipo de cadastro que pode ser 'Cadastro de Professores' ou 'Cadastro de Ajudantes'.
  @Input() tipoCadastro!: 'Cadastro de Professores' | 'Cadastro de Ajudantes';

  // No caso este Input define o nome do ícone que será exibido.
  @Input() nomeIcone: string = ''; 
  
  // O @Output() permite que um componente envie eventos para seu componente pai. É como avisar o componente maior que algo aconteceu no componente menor.
  // No caso este @Output() emite um evento quando o ícone é clicado.
  @Output() clicouIcone = new EventEmitter<void>(); 
    
  // Metodo que tem a função que emite o evento quando o botão é clicado.
  botaoClicado() 
  {
  this.clicouIcone.emit(); 
  }
}