import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 01 | Intro';

  myname = 'Rahul Lodhi';
  x=20;
  y=20;

  myFunction(){
    alert("Function call works!!");
    this.secFunc();
  }

  secFunc(){
    alert("Second function called!!");
  }

  mydata : string | number = 'Rahul'; //multiple data type define

  myUpdate(){
    this.mydata=45;
    alert("Updated: "+this.mydata);
  }

  mySum(a:number,b:number){
    alert(a+b);
  }

}
