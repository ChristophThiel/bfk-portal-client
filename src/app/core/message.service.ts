import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.url}/messages`, {
      headers: {
        'Authorization': sessionStorage.getItem('user')
      }
    });
  }

  public accept(): Observable<any> {
    return null;
  }

  public decline(): Observable<any> {
    return null;
  }


}
