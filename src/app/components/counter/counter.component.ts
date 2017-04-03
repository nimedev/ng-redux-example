import { Component } from '@angular/core'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

import { counterDecrease, counterIncrease } from '../../../redux/modules/counter'

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html',
})

export class CounterComponent {
  count$: Observable<number>
  @select(['counter', 'value']) readonly count2$: Observable<number>

  constructor(private ngRedux: NgRedux<any>) {
    this.count$ = ngRedux.select<number>(state => state.counter.value)
  }

  handleDecrease() {
    this.ngRedux.dispatch(counterDecrease())
  }

  handleIncrease() {
    this.ngRedux.dispatch(counterIncrease())
  }
}
