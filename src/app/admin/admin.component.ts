import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../dialogs/confirmation/confirmation.dialog';
import { UserDialog } from '../dialogs/user/user.dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

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
      isSelected: true,
      route: '/admin'
    }
  ];
  public formGroup: FormGroup;

  constructor(private builder: FormBuilder, public dialog: MatDialog) {
    this.formGroup = builder.group({});
  }

  public delete() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '80vw',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public details(user: any = {}) {
    const dialogRef = this.dialog.open(UserDialog, {
      maxWidth: '100vw',
      disableClose: false,
      panelClass: 'full-dialog-container',
      autoFocus: false,
      data: {
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        email: user.email || '',
        roles: user.roles || []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
