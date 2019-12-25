import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../dialogs/confirmation/confirmation.dialog';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  public appointments: any[] = [
    {
      title: 'Vollversammlung Marchtrenk',
      from: '16. März 2020'
    }
  ];
  public shifts: any[] = [
    {
      title: 'Nachmittagsdienst',
      from: 'Donnerstag, 13. Dezember 2019',
      offered: false
    },
    {
      title: 'Nachtdienst',
      from: 'Mittwoch, 14. August 2019',
      offered: false
    }
  ]

  constructor(public dialog: MatDialog) { }

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
