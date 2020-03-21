import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any;
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
      this.usersService.getUsers({results: 20}).then(response => {
        this.users = response.results;
        this.usersService.setUsers(this.users);
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
