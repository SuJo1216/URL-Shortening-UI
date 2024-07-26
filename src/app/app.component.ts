import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { URLShortComponent } from './urlshort/urlshort.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, URLShortComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'URLShortening';
}
