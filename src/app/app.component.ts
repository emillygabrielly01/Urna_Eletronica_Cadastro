import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { RouterOutlet } from '@angular/router';


@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatIconModule, MatFormFieldModule, MatInputModule, MatIconModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  ngOnInit() 
  {
   
  };
}

