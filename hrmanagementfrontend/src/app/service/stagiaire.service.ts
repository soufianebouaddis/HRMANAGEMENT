import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stagiaire } from '../type/Stagiaire';
import { Observable } from 'rxjs';
import { DeleteMessage } from '../type/DeleteMessage';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private http:HttpClient) { }
  public add(stagiaire : Stagiaire):Observable<Stagiaire> {
    return this.http.post<Stagiaire>("http://localhost:9090/api/stagiaire/add",stagiaire);
  }
  public fetchAll():Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>("http://localhost:9090/api/stagiaire/stagiaires");
  }
  public delete(id : number):Observable<DeleteMessage>{
    return this.http.delete<DeleteMessage>("http://localhost:9090/api/stagiaire/delete/"+id);
  }
  public update(stgId : number, stagiaire : Stagiaire) : Observable<Stagiaire> {
    return this.http.put<Stagiaire>("http://localhost:9090/api/stagiaire/update/"+stgId,stagiaire);
  }
  public affectEncadrant(idStagaire : number , idEncadrant : number) : Observable<DeleteMessage> {
    return this.http.post<DeleteMessage>(`http://localhost:9090/api/stagiaire/affectencadrant/${idStagaire}/${idEncadrant}`,{})
  }
  public affectTache(idStagaire : number , idTache : number) : Observable<DeleteMessage> {
    return this.http.post<DeleteMessage>(`http://localhost:9090/api/stagiaire/affecttache/${idStagaire}/${idTache}`,{})
  }
}
