import { Component } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";
import { BarraComponent } from "../barra/barra.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-professor',
  standalone: true,
  imports: [CadastroComponent, BarraComponent],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessorComponent 
{

  constructor(private router: Router)
  {

  }
  
  voltar()
  {
     this.router.navigateByUrl('/')
  }
}
