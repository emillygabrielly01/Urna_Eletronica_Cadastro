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
  @Input() tipoCadastro!: 'Cadastro de Professores' | 'Cadastro de Ajudantes';
  @Input() nomeIcone:string = '';
  @Output() clicouIcone= new EventEmitter <void>();

  botaoClicado()
  {
    this.clicouIcone.emit();
  }


  
}
