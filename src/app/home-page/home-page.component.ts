import { Component } from '@angular/core';
import { BarraComponent } from "../barra/barra.component";
import { ListaCadastrosProfessorComponent } from "../lista-cadastros-professor/lista-cadastros-professor.component";

@Component
({
  selector: 'app-home-page',
  standalone: true,
  imports: [BarraComponent, ListaCadastrosProfessorComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent 
{

}
