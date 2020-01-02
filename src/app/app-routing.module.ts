import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { MarketComponent } from './dashboard/market/market.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { animation: 'isLeft' } },
  { path: 'reset', component: ResetComponent, data: { animation: 'isRight' } },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { animation: 'isRight' }, children: [
      { path: '', component: OverviewComponent, data: { animation: 'isRight' } },
      { path: 'scheduler', component: SchedulerComponent, data: { animation: 'isRight' } },
      { path: 'market', component: MarketComponent, data: { animation: 'isRight' } },
      { path: 'admin', component: AdminComponent, data: { animation: 'isRight' } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
