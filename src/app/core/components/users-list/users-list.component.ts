import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService,
              private router: Router, private ngxService: NgxUiLoaderService) {

  }
  /**
   * @author Carlos Melgoza
   * @desc Retrieve users from memory, allocated in user service, to maintain the same users through the exercise
   */
  ngOnInit() {
    this.users = this.usersService.getOnMemoryUsers();
    this.getUsers();

  }

  /**
   * @author Carlos Melgoza
   * @desc if there are no users, ask to the user service to retrieve 20 users, otherwise, just show the spinner to improve UX
   */
  getUsers() {
    this.ngxService.start();
    if (!this.users ) {
      this.usersService.getUsers({per_page: 12}).then(response => {
        this.users = response.data.map(val => {
          return {
            id: val.id,
            firstName: val.first_name,
            lastName: val.last_name,
            email: val.email,
            avatar: val.avatar
          };
        });
        this.usersService.setUsers(this.users);
        this.ngxService.stop();
      }).catch(err => {
        this.ngxService.stop();

      });
    } else {
      setTimeout(() =>  {
        this.ngxService.stop();

      }, 200);
    }
  }

}
