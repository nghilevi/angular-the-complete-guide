import { Component } from '@angular/core';
import { CounterService } from './services/CounterService';
import { UsersService } from './services/UsersService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = UsersService.activeUsers;
  inactiveUsers = UsersService.inactiveUsers;

  counter: object = {};

  constructor(private counterService: CounterService){
    this.counterService.counter.subscribe(counter => this.counter = counter)
  };


}
