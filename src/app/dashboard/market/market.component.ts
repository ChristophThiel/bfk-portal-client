import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../dialogs/confirmation/confirmation.dialog';
import { SwapDialog } from '../../dialogs/swap/swap.dialog';
import { ShiftService } from 'src/app/core/shift.service';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {


  public shifts: any[] = []
  public messages: any[] = [];

  constructor(private shiftService: ShiftService, private messageService: MessageService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.shiftService.market().subscribe(response => this.shifts = response);
    this.messageService.get().subscribe(response => this.messages = response);
  }

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
