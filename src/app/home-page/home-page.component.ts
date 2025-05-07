import { Component } from '@angular/core';
import { BarraComponent } from "../barra/barra.component";
import { ListaCadastrosProfessorComponent } from "../lista-cadastros-professor/lista-cadastros-professor.component";
import { MeuComponenteComponent } from "../meu-componente/meu-componente.component";
import { MeuComponente2Component } from "../meu-componente-2/meu-componente-2.component";
import { CadastroAcademiasComponent } from "../cadastro-academias/cadastro-academias.component";

@Component
({
  selector: 'app-home-page',
  standalone: true,
  imports: [BarraComponent, ListaCadastrosProfessorComponent, MeuComponenteComponent, MeuComponente2Component, CadastroAcademiasComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent 
{

}
