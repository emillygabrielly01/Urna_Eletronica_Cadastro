import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from "./cadastro/cadastro.component";
import { BarraComponent } from "./barra/barra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatIconModule, BrowserModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatIconModule, CadastroComponent, BarraComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

