import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
