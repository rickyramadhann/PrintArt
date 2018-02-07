import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    
    login(username: string, password: string) {
        return this.http.post<any>('http://192.168.100.204/api/auth/signin', { username: username, password: password })
        .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    console.log(user)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('id', user.user.id);
                    localStorage.setItem('username', user.user.username);
                }
                
                return user;
            });
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('username');
    }
}