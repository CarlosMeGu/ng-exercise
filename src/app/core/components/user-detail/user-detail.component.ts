import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userInfo: any;

  constructor(private route: ActivatedRoute, private dataRoute: ActivatedRoute,
              private usersService: UsersService) { }


  /**
   * @author Carlos Melgoza
   * @desc Receive the user information via JSON object.
   * @info The spinner is just UX, can be removed
   */
  ngOnInit() {
    this.userInfo = this.usersService.getCurrentUser();
    setTimeout(() =>  {
    }, 300);
  }

  /**
   * @author Carlos Melgoza
   * @desc Remove the current user detail, to improve memory usage
   */
  ngOnDestroy() {
    this.usersService.setCurrentUser(null);
  }

}
