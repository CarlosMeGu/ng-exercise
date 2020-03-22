import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService,
              private router: Router) {

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

        console.log(this.users);
      }).catch(err => {
      });
    } else {
      setTimeout(() =>  {
      }, 200);
    }
  }

  /**
   * @author Carlos Melgoza
   * @desc Store in memory the current user and move to user details page
   * @param userInfo User to display additional information
   */
  goToDetails(userInfo) {
    this.usersService.setCurrentUser(userInfo);
    this.router.navigate(['home/details']);
  }
}
