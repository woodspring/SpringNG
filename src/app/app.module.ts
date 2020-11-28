import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFxqComponent } from './components/add-fxq/add-fxq.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFxqComponent,
    ListFxqComponent,
    FxqSymbolsComponent,
    FxqSymbolTenorComponent,
    FxqDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
