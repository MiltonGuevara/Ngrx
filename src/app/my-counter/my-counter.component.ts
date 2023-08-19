import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../redux/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;
  constructor(
    private store: Store<{count: number}>
  ){
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count')
  } 

  
  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment())
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
  }
 
  reset() {
    // TODO: Dispatch a reset action
  }
}
