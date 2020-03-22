import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {Subscription} from 'rxjs';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;

  /**
   * Subscription creates ans observable, than can receive or send information to other components, i.e. sync login/logout
   */
  subscription: Subscription;

  /**
   * This flags are created just to send a message to components.
   * If removed, it will send recursive messages
   */
  DONT_SEND_MESSAGE = false;
  SEND_MESSAGE = true;

  constructor(private appService: AppService) {
    /**
     * Subscription listens to new events or 'messages' within components
     */
    this.subscription = this.appService.getMessage().subscribe(state => {
      if (state === 'login') {
        this.login(this.DONT_SEND_MESSAGE);
      } else if (state === 'logout') {
        this.logout(this.DONT_SEND_MESSAGE);
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  login(send?) {
    this.isLoggedIn = true;
    if (send === true) {
      this.appService.sendMessage('login');
    }
  }

  signup(send?) {
    this.isLoggedIn = true;
    if (send === true) {
      this.appService.sendMessage('login');
    }
  }

  logout(send?) {
    this.isLoggedIn = false;
    if (send === true) {
      this.appService.sendMessage('logout');
    }
  }
}
