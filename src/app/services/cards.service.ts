import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CardsService {
  

  // private baseUrl: string = environment.baseUrl;
  
  constructor(private _http: HttpClient) { }

  cardsArray= [
    {
    title:"Desarrollo Web",
    img: "./assets/marketing.png",
    description: "Nuestra especialidad es el desarrollo web. Contamos con gran variedad de productos para satisfacer tus demandas. Creemos en la capacitación constante!! " 
  
   },
   {
    title:"Mobile App",
    img: "./assets/mobile.png",
    description: "El  mundo de apps móviles evoluciona constantemente es por eso que desarrollamos aplicaciones PWA, que es un tipo de software que está destinado a funcionar en cualquier plataforma que use un navegador compatible con los estándares." 

   },
   {
    title:"Base de Datos",
    img: "./assets/digital.png",
    description: "Integramos a tu proyecto base de datos no relacionales con MongoDB Atlas, que te permiten respaldar tu informacion de manera segura y acorde a los desafíos actuales." 
 
   }
  ]  
  
 


getCards(){
  return this.cardsArray

}

sendMessage(body:any) : Observable<any> {
  return this._http.post("https://dulce-alma-deco.herokuapp.com/api/send-mail", body);
};


}
