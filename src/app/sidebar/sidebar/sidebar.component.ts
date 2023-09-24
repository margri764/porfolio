import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() emitShow= new EventEmitter<boolean>()


  show: boolean = true;

  constructor(  private route : Router
        
  ) { }

  ngOnInit(): void {
  }

  showToolbar(){
    this.emitShow.emit(this.show);
   
  }

  goToUrl(value : any): void {


    switch( value ) {
      case 'whatsapp' :
                  (window as any).open('https://wa.me/+542302690139?text=Hola!!%20', "_blank");
       break;
      
      case 'gps': 
                  (window as any).open('https://goo.gl/maps/3fDrcSniMPY9TkQE9', "_blank");

      break;

      case 'cel': 
                 window.open('https://wa.me/+542302623444?text=Hola necesito información%20', '_blank');
          
     break;
     
     case 'email': 
                this.route.navigateByUrl('/contact-us')
     break;
  
    }
}
  
}
