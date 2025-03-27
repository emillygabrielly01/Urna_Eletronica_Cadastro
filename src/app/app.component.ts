import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BarraComponent } from "./barra/barra.component";
import { CadastroComponent } from "./cadastro/cadastro.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatIconModule, MatFormFieldModule, MatInputModule, MatIconModule, BarraComponent, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

