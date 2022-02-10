import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  promiseResult: any;

  _url = 'https://crudcrud.com/api/c9314e3f2fcf47739940a2538b824b0d/users';

  constructor(private _http: HttpClient) { }

  addUser(user: User) {
    return this._http.post<any>(this._url, user);
  }

  getUsers() {
    return this._http.get<[any]>(this._url);
  }

  getUser(id: any) {
    return this._http.get<[any]>(this._url + '/' + id);
  }

  deleteUser(id: any) {
    return this._http.delete<any>(this._url + '/' + id);
  }

  updateUser(id: any, user: any) {
    return this._http.put<any>(this._url + '/' + id, user);
  }
}
