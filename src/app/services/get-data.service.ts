import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }
  public fetchTitle():Observable<any>{
    return this.http.get("https://run.mocky.io/v3/ae48549f-a3d6-4874-bf4d-f729f971c93d");
  }
}
