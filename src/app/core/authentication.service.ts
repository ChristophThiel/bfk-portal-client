import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('user'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.url}/users/login`, { email, password })
      .pipe(map(response => {
        console.log(response);
        if (response && response.token) {
          sessionStorage.setItem('user', response.token);
          this.currentUserSubject.next(response.user);
        }
        return response;
      }));
  }

  public logout(): void {
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

}
