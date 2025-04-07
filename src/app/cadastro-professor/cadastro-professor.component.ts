import { Component } from '@angular/core';
import { CadastroComponent } from "../cadastro/cadastro.component";

@Component({
  selector: 'app-cadastro-professor',
  standalone: true,
  imports: [CadastroComponent],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessorComponent 
{

}
