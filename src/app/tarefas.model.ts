import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule
({
  imports: [BrowserModule,FormsModule,AppComponent],
})
export class AppModule { 
    id: number = 0;
    tarefa: string = '';
    concluida: boolean = false;
}