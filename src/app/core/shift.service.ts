import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }

  public getShifts(): any[] {
    return [
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
    ];
  }
}
