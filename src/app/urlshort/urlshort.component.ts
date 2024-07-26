import { Component,NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { url } from 'inspector';
@Component({
  selector: 'app-urlshort',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './urlshort.component.html',
  styleUrl: './urlshort.component.css',
  providers: [ApiService]
  
})

export class URLShortComponent {
  textBoxValue: string = '';
  responseData: string='';
  
  constructor(private apiService: ApiService) {}
  onSubmit() {
    console.log('Submit button clicked');
    // Assuming onSubmit is triggered when form is submitted or button is clicked
    if (this.textBoxValue.trim()) {
      debugger;
      this.apiService.sendDataToDatabase({ url: this.textBoxValue })
        .subscribe(
          response => {
            this.responseData = JSON.stringify(response);

            console.log('Data sent successfully!', response);
            // Optionally reset textbox value or handle success
          },
          error => {
            console.error('Error sending data:', error);
            // Handle error response
          }
        );
    } else {
      console.log('Textbox value is empty.');
    }
  }
}
