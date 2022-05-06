import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data : any){
    return this.http.post<any>("https://reqres.in/api/users", data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  getUser(){
    return this.http.get<any>("https://reqres.in/api/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUser(data: any, id: number){
    return this.http.put<any>("https://reqres.in/api/users"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUser(id: number){
    return this.http.delete<any>("https://reqres.in/api/users"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }

}
