import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  private currentUser: any;
  private tempUsers: any;
  constructor(private httpClient: HttpClient) { }

  /**
   * @author Carlos Melgoza
   * @desc Generate users with randomuser.me
   * @param data, object with the query information, more info @ https://randomuser.me/documentation#intro
   */
  getUsers(data) {
    return this.httpClient
      .get('https://reqres.in/api/users', {
        params: data
      })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  /**
   * @author Carlos Melgoza
   * @desc Store current user in memory
   * @param user, user to store
   */
  setCurrentUser(user) {
    this.currentUser = user;
  }

  /**
   * @author Carlos Melgoza
   * @desc Get current user
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * @author Carlos Melgoza
   * @desc Store all the users
   * @param users, Users to store
   */
  setUsers(users) {
    this.tempUsers = users;
  }

  /**
   * @author Carlos Melgoza
   * @desc Get current users
   */
  getOnMemoryUsers() {
    return this.tempUsers;
  }

  /**
   * @author Carlos Melgoza
   * @desc Just to retrieve all the information as an object, to reduce code in implementation
   */
  private extractData(res: Response) {
    return res || {};
  }

  /**
   * @author Carlos Melgoza
   * @desc Rejects current http call, produce a catch
   */
  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }



}
