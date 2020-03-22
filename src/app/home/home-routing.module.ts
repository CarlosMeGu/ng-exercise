import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailComponent} from '../core/components/user-detail/user-detail.component';
import {UsersListComponent} from '../core/components/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user-detail/:id', component: UserDetailComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
