import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 04 | Get-Set Input-Value';

  myName = '';
  displayName = '';

  enterName(event: Event){
    this.myName = (event.target as HTMLInputElement).value;
    console.log(this.myName);
  }

  myGetName(event: Event){
    this.displayName = this.myName;
    console.log(this.displayName);
  }

  mySetName(event: Event){
    this.myName = "Default-Name";
  }
  
  myDate = '';
}
