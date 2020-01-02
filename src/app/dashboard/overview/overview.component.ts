import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../dialogs/confirmation/confirmation.dialog';
import { ShiftService } from 'src/app/core/shift.service';
import { AppointmentService } from 'src/app/core/appointment.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public appointments: any[] = [];
  public shifts: any[] = [];

  constructor(private shiftService: ShiftService, private appointmentService: AppointmentService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.appointmentService.get()
      .subscribe(response => this.appointments = response);
    this.shiftService.get()
      .subscribe(response => this.shifts = response);
  }

  public getRequestsCountMessage(shift: any): string {
    if (shift.requestsCount > 1)
      return `${shift.requestsCount} Angebote`;
    else if (shift.requestsCount === 1)
      return '1 Angebot';
    else
      return 'Kein Angebot';
  }

  public offer(shift: any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '80vw',
      data: { id: shift.id },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shiftService.offer(result.id);
        shift.offered = !shift.offered;
      }
    });
  }

}
