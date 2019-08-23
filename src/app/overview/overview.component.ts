import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../dialogs/confirmation/confirmation.dialog';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: true,
      route: '/overview'
    },
    {
      content: 'Kalendar',
      icon: 'perm_contact_calendar',
      isSelected: false,
      route: '/scheduler'
    },
    {
      content: 'Marktplatz',
      icon: 'store',
      isSelected: false,
      route: '/market'
    },
    /*{
      content: 'Dokumente',
      icon: 'folder',
      isSelected: false,
      route: 'documents'
    },*/
    {
      content: 'Administration',
      icon: 'settings',
      isSelected: false,
      route: '/admin'
    }
  ];
  public appointments: any[] = [
    {
      title: 'Vollversammlung Marchtrenk',
      from: '16. März 2020'
    }
  ];
  public shifts: any[] = [
    {
      title: 'Nachmittagsdienst',
      from: '13. August 2019',
      offered: false
    },
    {
      title: 'Nachtdienst',
      from: '14. August 2019',
      offered: false
    }
  ]

  constructor(public dialog: MatDialog) { }

  public offer(shift: any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '80vw',
      data: {
        title: shift.title,
        from: shift.from
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        shift.offered = true;
      }
    });
  }

}
