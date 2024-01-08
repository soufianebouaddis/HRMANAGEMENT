import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encadrant } from '../type/Encadrant';
import { Observable } from 'rxjs';
import { DeleteMessage } from '../type/DeleteMessage';

@Injectable({
  providedIn: 'root'
})
export class EncadrantService {

  constructor(private http:HttpClient) { }
  public add(enc : Encadrant):Observable<Encadrant> {
    return this.http.post<Encadrant>("http://localhost:9090/api/encadrant/add",enc);
  }
  public fetchAll():Observable<Encadrant[]> {
    return this.http.get<Encadrant[]>("http://localhost:9090/api/encadrant/fetchall");
  }
  public delete(id : number):Observable<DeleteMessage>{
    return this.http.delete<DeleteMessage>("http://localhost:9090/api/encadrant/delete/"+id);
  }
  public update(encId : number, enc : Encadrant) : Observable<Encadrant> {
    return this.http.put<Encadrant>("http://localhost:9090/api/encadrant/update/"+encId,enc);
  }
}
