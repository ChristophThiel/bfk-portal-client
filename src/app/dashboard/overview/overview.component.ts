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

  public appointments: any[] = [
    {
      title: 'Vollversammlung Marchtrenk',
      from: '16. März 2020'
    }
  ];
  public shifts: any[];

  constructor(private shiftService: ShiftService, private appointmentService: AppointmentService, public dialog: MatDialog) {
    this.shifts = this.shiftService.getShifts();
  }

  public ngOnInit(): void {
    this.appointmentService.getAppointments()
      .subscribe(response => this.appointments = response);
  }

  public offer(shift: any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '80vw',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        shift.offered = true;
      }
    });
  }

}
