import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PDCASE_URL, REST } from '@app/app.api';
import { ListaJSON } from '@shared/lista-json.model';
import { User } from '@app/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getUsers(userSearch: any): Observable<ListaJSON<User>> {
  //   return this.http.post<ListaJSON<User>>(`${PDCASE_URL}/${REST.USER}/allUsers`, userSearch);
  // }

  getUsers(userSearch: any): Observable<ListaJSON<User>> {
    return this.http.post<ListaJSON<User>>(`${PDCASE_URL}/${REST.USER}/teste`,{});
  }

}
