import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}/shifts`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }

  public offer(shiftId: number): Observable<any> {
    return this.http.get<any>(`${environment.url}/shifts/${shiftId}`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }
}
