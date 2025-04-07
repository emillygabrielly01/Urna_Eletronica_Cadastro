import { Component } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";

@Component
({
  selector: 'app-cadastro-ajudante',
  standalone: true,
  imports: [CadastroComponent],
  templateUrl: './cadastro-ajudante.component.html',
  styleUrl: './cadastro-ajudante.component.scss'
})
export class CadastroAjudanteComponent 
{

}
