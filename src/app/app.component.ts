import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'iq-root',
  imports: [RouterOutlet],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  host: {
    class: 'g-flex-column__item g-flex-column',
  },
})
export class AppComponent {}
