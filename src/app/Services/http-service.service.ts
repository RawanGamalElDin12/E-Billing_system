import { Injectable } from '@angular/core';
import { User } from '../user';
import{
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseurl = 'https://billing-system-d30dd-default-rtdb.firebaseio.com/'
  constructor(private http: HttpClient) { }
  httpOptions= 
  {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' :'*'
      }
    )
  }
  getUser(id: string): Observable<User> {
    const url = `${this.baseurl}/users/${id}.json`;
    return this.http.get<User>(url, { withCredentials: true });
  }


}
