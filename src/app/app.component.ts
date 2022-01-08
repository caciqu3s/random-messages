import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-messages';

  items = [
    {
      label: 'Send a Message',
      link: ['/message']
    },
    {
      label: 'About me',
      link: ['/me']
    }
  ]
}
