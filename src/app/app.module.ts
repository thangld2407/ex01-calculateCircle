import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import {circle} from './circle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [circle],
  bootstrap: [circle]
})
export class AppModule {

}
