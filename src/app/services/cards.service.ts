import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CardsService {
  
  closeBottomSheet$ : EventEmitter<boolean> = new EventEmitter<boolean>;

  private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }


sendMessage(body:any) : Observable<any> {
  return this._http.post(`${this.baseUrl}api/send-email/feint`, body);
};


}
