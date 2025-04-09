import { Component } from '@angular/core';
import { Professor } from './models/professor.model';
import { FotoComponent } from "./foto/foto.component";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BarraComponent } from "./barra/barra.component";
import { MatFormFieldModule } from '@angular/material/form-field'
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListaCadastrosProfessorComponent } from "./lista-cadastros-professor/lista-cadastros-professor.component";
import { ListaCadastrosAjudantesComponent } from "./lista-cadastros-ajudantes/lista-cadastros-ajudantes.component";
import { RouterOutlet } from '@angular/router';


@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatIconModule, MatFormFieldModule, MatInputModule, MatIconModule, BarraComponent, ListaCadastrosProfessorComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  ngOnInit() 
  {
   
  };
}

