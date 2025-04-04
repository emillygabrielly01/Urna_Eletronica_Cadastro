import { Component } from '@angular/core';
import { Professor } from './models/professor.model';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BarraComponent } from "./barra/barra.component";
import { MatFormFieldModule } from '@angular/material/form-field'
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListaCadastrosProfessorComponent } from "./lista-cadastros-professor/lista-cadastros-professor.component";

@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatIconModule, MatFormFieldModule, MatInputModule, MatIconModule, BarraComponent, CadastroComponent, ListaCadastrosProfessorComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  ngOnInit() 
  {
   const professor1 = new Professor();
   professor1.nome = 'emilly';
  };
}

