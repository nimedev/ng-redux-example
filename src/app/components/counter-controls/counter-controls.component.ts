import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'counter-controls',
  styleUrls: ['counter-controls.component.css'],
  templateUrl: 'counter-controls.component.html'
})

export class CounterControlsComponent {
  @Output() decreaseCounter = new EventEmitter()
  @Output() increaseCounter = new EventEmitter()

  decrease() {
    this.decreaseCounter.emit()
  }

  increase() {
    this.increaseCounter.emit()
  }
}
