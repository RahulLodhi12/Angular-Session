import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 02 | Counter-App';

  cnt = 0;

  //3 functions
  myIncrement() {
    this.cnt = this.cnt + 1;
  }

  myDecrement() {
    this.cnt = this.cnt - 1;
  }

  myReset() {
    this.cnt = 0;
  }

  //single function
  handleCounter(val: string) {
    if (val == 'plus') {
      this.cnt = this.cnt + 1;
    }
    else if (val == 'minus') {
      this.cnt = this.cnt - 1;
    }
    else if (val == 'reset') {
      this.cnt = 0;
    }
  }

}
