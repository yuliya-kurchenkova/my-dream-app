import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  // Опционально, я добавил ввод placeholder для настройки
  @Input() readonly placeholder: string = '';
  @Output() setValue: EventEmitter<any> = new EventEmitter();

  private _searchSubject: Subject<any> = new Subject();

  constructor() {
    this._setSearchSubscription();
  }

  public updateSearch(searchTextValue: string) {
    this._searchSubject.next( searchTextValue );
  }

  private _setSearchSubscription() {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit( searchValue );
    });
  }

  ngOnDestroy() {
    this._searchSubject.unsubscribe();
  }

}
