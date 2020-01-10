import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}/shifts`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }

  public market(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}/shifts/market`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }

  public offer(shiftId: number): Observable<any> {
    return this.http.put<any>(`${environment.url}/shifts/offer/${shiftId}`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }

  public swap(shiftId: number): Observable<any> {
    return null;
  }

  public take(shiftId: number): Observable<any> {
    return null;
  }
}
