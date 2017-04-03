import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CounterComponent } from './counter/counter.component'
import { CounterControlsComponent } from './counter-controls/counter-controls.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent,
    CounterControlsComponent
  ],
  exports: [
    CounterComponent,
    CounterControlsComponent
  ]
})
export class ComponentsModule { }
