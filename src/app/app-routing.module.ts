import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SchedulerComponent } from './dashboard/scheduler/scheduler.component';
import { MarketComponent } from './dashboard/market/market.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'market', component: MarketComponent },
  { path: 'documents', component: DocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
