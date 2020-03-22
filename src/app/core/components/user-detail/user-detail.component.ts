import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userInfo: User;
  id: number;

  constructor(private route: ActivatedRoute, private dataRoute: ActivatedRoute,
              private usersService: UsersService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }


  /**
   * @author Carlos Melgoza
   * @desc Receive the user information via JSON object.
   * @info The spinner is just UX, can be removed
   */
  ngOnInit() {
    this.usersService.getUsers({id: this.id}).then(response => {
      console.log(response)
      this.userInfo =  {
          id: response.data.id,
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          email: response.data.email,
          avatar: response.data.avatar
        };
      console.log(this.userInfo);
    }).catch(err => {
      console.log(err)
    });
  }

  /**
   * @author Carlos Melgoza
   * @desc Remove the current user detail, to improve memory usage
   */
  ngOnDestroy() {
    this.usersService.setCurrentUser(null);
  }

}
