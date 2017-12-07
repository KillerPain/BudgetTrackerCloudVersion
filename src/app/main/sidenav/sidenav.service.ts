import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidenavService {

  isActive = new BehaviorSubject<boolean>(true);

  constructor() { }

  change(param: boolean) {
    this.isActive.next(param);
  }

}
