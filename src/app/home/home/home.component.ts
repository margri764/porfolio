import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuresCards : any= [];
  imgWidth : any;
  readMore : boolean = false;
  phone : boolean = false;

  constructor(
              private _card : CardsService,
              private router : Router
  ) { 
    this.featuresCards = this._card.getCards();
    (screen.width <= 800 ? this.phone = true : this.phone = false)
 

  }


  ngOnInit(): void {

  }

  keepReading(){
    this.readMore = !this.readMore;

  }

  goToUrl(value : any): void {


    switch( value ) {
      // case 'whatsapp' :
      //             (window as any).open('https://wa.me/+542302690139?text=Hola!!%20', "_blank");
      //  break;
      
      case 'gps': 
                  (window as any).open('https://goo.gl/maps/3fDrcSniMPY9TkQE9', "_blank");

      break;

      case 'cel': 
                 window.open('https://wa.me/+542302623444?text=Hola necesito información%20', '_blank');
          
     break;

     case 'linkedin': 
                window.open('https://www.linkedin.com/in/marcelo-griotti-a78875169/', '_blank');

    break;

     
     case 'email': 
                this.router.navigateByUrl('/contact-us')
     break;
  
    }

  }

}
