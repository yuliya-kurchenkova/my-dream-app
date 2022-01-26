import { Component, OnInit } from '@angular/core';
import {Observable, throwError} from "rxjs";

@Component({
  selector: 'app-async-example2',
  templateUrl: './async-example2.component.html',
  styleUrls: ['./async-example2.component.scss']
})
export class AsyncExample2Component implements OnInit {
  name: string = '';

  constructor() { }

  setNameWithPromise(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.name = name;
      resolve();
    });
  }

  asyncExample(name?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if(!name) {
        reject("имя не указано");
        return
      }
      setTimeout(() => resolve(name));
    })
  }

  setNameAfterMinute(name: string): void {
    setTimeout(() => {
      this.name = name;
    }, 60000)
  }

  promiseExample(name?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!name) {
          reject("нет имени");
          return;
        }
        this.name = name;
        resolve()
      }, 3000);
    });
  }

  observableExample(name?: string): Observable<string> {
    if(!name) {
      return throwError("нет имени")
    }
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(name);
        observer.complete();
      }, 1000)
    })
  }


  ngOnInit(): void {
  }

}
