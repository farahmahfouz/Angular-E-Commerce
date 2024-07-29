import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject(0);

  constructor() { }

  getCount(){
    return this.counter.asObservable()
  }

  setCount(newCounter: number){
    return this.counter.next(newCounter)
  }
}
