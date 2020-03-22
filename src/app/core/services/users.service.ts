import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {

  private tempUsers: User[];
  constructor(private httpClient: HttpClient) { }

  /**
   * @author Carlos Melgoza
   * @desc Generate users with reqres.in
   * @param data, object with the query information, more info @ https://reqres.in/
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
   * @desc Store all the users
   * @param users, Users to store
   */
  setUsers(users: User[]) {
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
