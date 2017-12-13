import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import * as xml2js from 'xml2js';

@Injectable()
export class ProfileService {

  apiUrl = 'http://127.0.0.1:8000';
  profileUrl = '/api/profile/user';
  transactions = '/api/app/get';
  cTransaction = '/api/app/add';

  constructor(private http: HttpClient, private ht: Http) { }

  isLoggedIn(): Boolean {
    // TODO(nurlashko): Add check and token refresh if needed
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        return true;
    } else {
        return false;
    }
  }

  getProfile() {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const headers = new HttpHeaders().set('Content-Type', 'application/json;');
      return this.http.get(this.profileUrl + '/' + currentUser.token, {headers: headers});
    }
  }

  getPhoto(username) {
    if (this.isLoggedIn()) {
      return this.http.post("https://zv5yt8g8j2.execute-api.us-east-2.amazonaws.com/test/avatar/getbyusername", {username: username});
    }
  }

  getTransactions() {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const headers = new HttpHeaders().set('Content-Type', 'application/json;');
      return this.http.get(this.transactions, {headers: headers});
    }
  }

  createTransaction(content: string, price: string) {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const headers = new HttpHeaders().set('Content-Type', 'application/json;');
      return this.http.post(this.cTransaction + '/' + currentUser.token, {
        content : content,
        price : price
      } ,{ headers: headers }).toPromise().then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  editProfile(username, firstname, lastname, email) {
    if (this.isLoggedIn()) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const headers = new HttpHeaders().set('Content-Type', 'application/json;');
      return this.http.post('/api/admin/updateUser', {
        username: username,
        firtname: firstname,
        lastname: lastname,
        email: email
      } ,{ headers: headers }).toPromise().then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  getRss() {
    const headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/x-www-form-urlencoded');
    return this.http.get('http://www.nationalbank.kz/rss/rates_all.xml', {headers: headers}).toPromise().then((res: any) => {
      let data;
      xml2js.parseString( res.text(), function (err, result) {
        console.dir(result); // Prints JSON object!
        data = result;
      });
     return data;
    }).catch(error => {
      console.log(error);
    });
  }
}
