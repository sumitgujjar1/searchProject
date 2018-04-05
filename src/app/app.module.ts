import { DataComponent } from './Components/data/data.components';
import { OrderBy } from './components/filters/order.filter';
import { SearchFilter } from './components/filters/search.filter';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SearchFilter,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
