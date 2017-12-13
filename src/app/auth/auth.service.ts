import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class AuthService {

  apiUrl = 'http://localhost:8080/BudgetTracker';
  loginUrl = '/api/profile/login';
  registerUrl = '/api/profile/register';

  constructor(private http: HttpClient) { }

  isLoggedIn(): Boolean {
    // TODO(nurlashko): Add check and token refresh if needed
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        return true;
    } else {
        return false;
    }
}

  login(email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.loginUrl, {
        email: email,
        password: password
    }, {headers: headers}).toPromise().then((data: any) => {
      localStorage.setItem('currentUser', JSON.stringify({ token: data.id, username: email}));
    }).catch(error => {
      console.log(error);
    });
  }

  register(username: string, password: string, email: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    this.http.post(this.registerUrl, {
        userName: username,
        email: email,
        password: password
    }, {headers: headers}).toPromise().then((data: any) => {
      localStorage.setItem('currentUser', JSON.stringify({ token: data.id, username: username}));
    }).catch(error => {
      console.log(error);
    });
  }
}
