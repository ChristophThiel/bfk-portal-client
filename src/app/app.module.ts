import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardEntryComponent } from './dashboard-entry/dashboard-entry.component';
import { OverviewComponent } from './overview/overview.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { MarketComponent } from './market/market.component';
import { DocumentsComponent } from './documents/documents.component';
import { AdminComponent } from './admin/admin.component';

// Dialogs
import { ConfirmationDialog } from './dialogs/confirmation/confirmation.dialog';
import { AppointmentDialog } from './dialogs/appointment/appointment.dialog';
import { SwapDialog } from './dialogs/swap/swap.dialog';

import { DxSchedulerModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { UserDialog } from './dialogs/user/user.dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    DashboardEntryComponent,
    OverviewComponent,
    SchedulerComponent,
    MarketComponent,
    DocumentsComponent,
    AdminComponent,
    ConfirmationDialog,
    AppointmentDialog,
    SwapDialog,
    UserDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppMaterialModule,
    DxSchedulerModule
  ],
  entryComponents: [
    LoginComponent,
    ConfirmationDialog,
    AppointmentDialog,
    SwapDialog,
    UserDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
