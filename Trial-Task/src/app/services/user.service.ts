import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>('http://localhost:54945/api/Home/Users')
  }

  
  updateUser(user: User){
    return this.http.put('http://localhost:54945/api/Home/Users/Update', user)
  }
}
