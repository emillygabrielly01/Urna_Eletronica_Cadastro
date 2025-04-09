import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroAjudanteComponent } from './cadastro-ajudante/cadastro-ajudante.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = 
[
    { path: '', component: HomePageComponent}, // Rota padrão
    { path: 'cadastro/professor', component: CadastroProfessorComponent }, // Rota para a página "About"
    { path: 'cadastro/professor/:professorid/ajudantes', component: CadastroAjudanteComponent } // R
];
