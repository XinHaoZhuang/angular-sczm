import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './menu';
import { Observable, merge } from '../../node_modules/rxjs';
const HttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  menues: Menu[];
  private menuUrl = 'http://localhost/SCZM/Ashx/WX/WX_GetLoginInfo.ashx?action=GetMenu';
  getMenues(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/Ashx/WX/WX_GetLoginInfo.ashx?action=GetMenu');
  }
}
