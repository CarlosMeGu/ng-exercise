import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import tasks, { Task } from '../tasks/tasks';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class AppService {
  private subject = new Subject<any>();
  constructor(private sanitizer: DomSanitizer) {}

  getTasks(): Array<Task> {
    return tasks.map(task => {
      const updatedTask: Task = { description: '' };
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace(
            '{{link}}',
            `<a href='${link}'>${link}</a>`
          );
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace(
            '{{link}}',
            `<a href='/${link}' routerLink='${link}'>${link} route</a>`
          );
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(
        updatedTask.description
      ) as string;
      return Object.assign({}, task, updatedTask);
    });
  }


  /**
   * @author Carlos Melgoza
   * @desc Send message to components
   * @param message, information to send, can be changed to other type (number, array, object, etc)
   */
  sendMessage(message: string) {
    this.subject.next( message);
  }

  /**
   * @author Carlos Melgoza
   * @desc Return the observable to the components
   */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
