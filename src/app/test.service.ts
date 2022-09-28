import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private name = 'adam';
  $name = new Subject<string>();

  constructor() { }

  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
    this.$name.next(this.name);
  }

}
