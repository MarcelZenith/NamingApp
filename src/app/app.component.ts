import { Component } from '@angular/core';
import { UserService } from './new-user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NamingApp';

  constructor(public us: UserService) {}
}
