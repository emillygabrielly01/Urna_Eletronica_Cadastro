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
  tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';
  @Input() nomeIcone:string = '';

  @Output() clicouIcone= new EventEmitter <void>();

  botaoClicado(){
    this.clicouIcone.emit();
  }
  
}
