import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {
  defaultValue!: string;

  get defaultString(): string {
    return this.defaultValue;
  }


  constructor() {
  }

  returnValue(index: number): string {
    const values = ["one", "two", "three"];
    return values[index];
  }

  initValue(): void {
    this.defaultValue = "one"
  }

  initValue2() {
    alert("something");
  }

  initValue3(text: string) {
    alert("something" + text);
  }

}
