import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFxqComponent } from './components/add-fxq/add-fxq.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';

const routes: Routes = [
  { path: '', redirectTo: 'fxquotes', pathMatch: 'full' },
  { path: 'fxquotes', component: ListFxqComponent },
  { path: 'fxqsymbols/:symbol', component: FxqSymbolsComponent },
  { path: 'fxqsymboltenor/:symbol/:tenor', component: FxqSymbolTenorComponent },
  { path: 'fxqdetail/:id', component: FxqDetailComponent },
  { path: 'addfxqoute', component: AddFxqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
