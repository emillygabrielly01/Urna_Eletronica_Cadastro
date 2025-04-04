import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component
({
  selector: 'app-barra',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss'
})
export class BarraComponent 
{
  tipoCadastro: 'Cadastro de Professores' | 'Cadastro de Ajudantes' = 'Cadastro de Professores';
}
