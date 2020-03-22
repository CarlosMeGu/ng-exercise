import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppService } from './services/app.service';
import {UsersService} from './services/users.service';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule ],
  declarations: [AppHeaderComponent, AppContentComponent, UsersListComponent, UserDetailComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [AppService, UsersService]
})
export class CoreModule {}
