import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../dialogs/confirmation/confirmation.dialog';
import { SwapDialog } from '../dialogs/swap/swap.dialog';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {

  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: false,
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
      isSelected: true,
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
  public shifts: any[] = [
    {
      title: 'Nachmittagsdienst',
      from: '13. August 2019',
      user: 'Roland Pöttinger-Kloimstein',
      phone: '+43 664 3203606'
    },
    {
      title: 'Nachtdienst',
      from: '14. August 2019',
      user: 'Alexander Koblmüller',
      phone: '+43 664 3203606'
    },
    {
      title: 'Freier Dienst',
      from: '24. Dezember 2019',
      user: '',
      phone: ''
    }
  ]

  constructor(public dialog: MatDialog) { }

  public take(shift: any) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '80vw',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public swap(shift: any) {
    const dialogRef = this.dialog.open(SwapDialog, {
      maxWidth: '100vw',
      disableClose: false,
      panelClass: 'full-dialog-container',
      autoFocus: false,
      data: {
        title: shift.title,
        from: shift.from,
        user: shift.user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
