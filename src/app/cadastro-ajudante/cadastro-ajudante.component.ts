import { Component } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { BarraComponent } from "../barra/barra.component";
import { Router } from '@angular/router';

@Component
({
  selector: 'app-cadastro-ajudante',
  standalone: true,
  imports: [CadastroComponent, BarraComponent],
  templateUrl: './cadastro-ajudante.component.html',
  styleUrl: './cadastro-ajudante.component.scss'
})
export class CadastroAjudanteComponent 
{
  constructor(private router: Router)
  {

  }
  
  voltar()
  {
     this.router.navigateByUrl('/')
  }
}
