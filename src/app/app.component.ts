import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ipconfig';

  ngOnInit(): void {
    //Taylor Series Expansion of PI
    for (let i = 1; i <= 20; i++) {
      let estimate = 0;
      for (let k = 0; k < i; k++) {
        estimate += Math.pow(-1, k) / (2 * k + 1);
      }
      estimate *= 4;

      let error = Math.abs(Math.PI - estimate);

      console.log(`Iteration ${i}: Estimate = ${estimate}, Error = ${error}`);
    }
  }
}
