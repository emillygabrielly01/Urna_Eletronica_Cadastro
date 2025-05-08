import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Academia } from '../models/academia.model';


@Component({
  selector: 'app-lista-academia',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule,  CommonModule, FormsModule, MatIconModule ],
  templateUrl: './lista-academia.component.html',
  styleUrl: './lista-academia.component.scss'
})
export class ListaAcademiaComponent {

 @Input() academias: Academia[] = []; // transformando o array em um input
 @Output() academiaEditada = new EventEmitter<Academia>();  // output para fazer o metodo editar


 excluirAcademia(paramAcademia: Academia) { // metodo usando o findindex que localiza UM ITEM da lista academia
  // "a" é a variavel que respresenta academias
  //se o valor retornado for -1, significa que a academia existe na lista
  // metodo splice excluiu a academia selecionado a apartir do icon excluir
  const posicaoAcademia = this.academias.findIndex(a => a.nomeAcademia === paramAcademia.nomeAcademia);
   // findindex procura e o splice ira excluir
   const Academia = this.academias.find(t => t.nomeAcademia === paramAcademia.nomeAcademia);
   console.log(' posição do item na lista: ' + posicaoAcademia);
   console.log(Academia);
   if (posicaoAcademia >= 0) {
    this.academias.splice(posicaoAcademia, 1)
   }
  
}
 
  editarAcademia(paramAcademia: Academia) { // metodo de editar academia
    // ele vai emitir a academia que foi selecionada, para pai que está ligado no if do typescript de cadastro-academias (ItemDaLista)
       this.academiaEditada.emit(paramAcademia);
        console.log(paramAcademia);
 }























































//  @Output() editarAcademia = new EventEmitter<Academia>(); 

// excluirAcademia(paramAcademia: Academia) {
//   // "t" É A VARIAVEL QUE REPRESENTA UM ITEM DA LISTA DE AcademiaS
//   // O METODO FINDINDEX LOCALIZA UM ITEM DA LISTA E RETORNA O POSIÇÃO DELE
//   const posicaoAcademia = this.Academias.findIndex(t => t.nomeAcademia === paramAcademia.nomeAcademia);
//   // find retorna o item da lista completo, mostrando todos os dados
//   const Academia = this.Academias.find(t => t.nomeAcademia === paramAcademia.nomeAcademia);

//   console.log(' posição do item na lista: ' + posicaoAcademia);
//   console.log(Academia);
  




  // SE O VALOR RETORNADO DO FINDINDEX FOR MAIOR QUE -1, SIGNIFICA QUE O ITEM EXISTE NA LISTA
//   if (posicaoAcademia > -1) {
//     this.Academias.splice(posicaoAcademia, 1);
//   }
// }
// @Input() Academias: Academia[] = [];

// // editar Academia
// enviarAcademia(paramAcademia: Academia) {
//    this.editarAcademia.emit(paramAcademia);
//    console.log(paramAcademia);
  
//   }

 
    // const Academia = this.Academias.find(t => t.idAcademia === paramAcademia.idAcademia);
    // if (Academia) {
    // Academia.statusAcademia = 'Concluída';
     
       
    //  }
  

 
  
  
}
