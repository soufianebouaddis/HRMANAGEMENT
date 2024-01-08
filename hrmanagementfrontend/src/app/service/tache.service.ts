import { TacheAssignee } from './../type/TacheAssignee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteMessage } from '../type/DeleteMessage';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http : HttpClient) { }
  public add(tache : TacheAssignee):Observable<TacheAssignee> {
    return this.http.post<TacheAssignee>("http://localhost:9090/api/tache/add",tache);
  }
  public fetchAll():Observable<TacheAssignee[]> {
    return this.http.get<TacheAssignee[]>("http://localhost:9090/api/tache/taches");
  }
  public delete(id : number):Observable<DeleteMessage>{
    return this.http.delete<DeleteMessage>("http://localhost:9090/api/tache/delete/"+id);
  }
  public update(taskid : number, task : TacheAssignee) : Observable<TacheAssignee> {
    return this.http.put<TacheAssignee>("http://localhost:9090/api/tache/update/"+taskid,task);
  }
}
