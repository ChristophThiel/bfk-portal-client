import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEntryComponent } from './dashboard/dashboard-entry/dashboard-entry.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AppointmentComponent } from './dashboard/appointment/appointment.component';
import { SchedulerComponent } from './dashboard/scheduler/scheduler.component';
import { MarketComponent } from './dashboard/market/market.component';
import { MarketRequestComponent } from './dashboard/market/market-request/market-request.component';
import { DocumentsComponent } from './dashboard/documents/documents.component';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardEntryComponent,
    OverviewComponent,
    AppointmentComponent,
    SchedulerComponent,
    MarketComponent,
    MarketRequestComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  entryComponents: [
    LoginComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
