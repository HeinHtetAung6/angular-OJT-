import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';

const routes: Routes = [
  {path: 'table-paginator',component: TablePaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
