import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userInfo: User;
  id: number;

  constructor(private route: ActivatedRoute, private dataRoute: ActivatedRoute,
              private usersService: UsersService, private ngxService: NgxUiLoaderService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }


  /**
   * @author Carlos Melgoza
   * @desc Receive the user information via JSON object.
   * @info The spinner is just UX, can be removed
   */
  ngOnInit() {
    this.ngxService.start();

    this.usersService.getUsers({id: this.id}).then(response => {
      this.userInfo =  {
          id: response.data.id,
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          email: response.data.email,
          avatar: response.data.avatar
        };
      this.ngxService.stop();

    }).catch(err => {
      this.ngxService.stop();

      console.log(err);
    });
  }



}
