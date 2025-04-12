import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 03 | Event';

  myClickEvent(event: any){
    alert("Click Event Called!! Event Type: "+event.type);
    console.log("Click Event",event.type);
  }

  myMouseEvent(event: MouseEvent){
    alert("Mouse Event Called!! Event Type: "+event.type);
    console.log("Mouse Event",event.type);
  }

  myInputEvent(event: Event){
    // alert("Input Event Called!! Event Type: "+event.type);
    const val = (event.target as HTMLInputElement).value;
    console.log("Input Value", val);
  }

  myFocus(event: Event){
    console.log("Focus Event: ",event.type);
  }

  myBlur(event: Event){
    console.log("Blur Event: ",event.type);
  }
}
