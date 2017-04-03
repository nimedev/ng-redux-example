import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgReduxModule, NgRedux } from '@angular-redux/store'

import createStore from '../redux/create-store'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    ComponentsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    // Tell @angular-redux/store about rootReducer and initial state.
    ngRedux.provideStore(createStore())
  }
}
