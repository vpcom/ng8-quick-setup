import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';

  navigation = [
    { link: './', label: 'Welcome' },
    { link: './login', label: 'Login' },
    { link: './home/', label: 'Home' }
  ];
}
