import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { ValidatorService } from 'src/app/services/validator.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  [x: string]: any;

quantity:any;
array: any []=[] 
string:any;
clicked:boolean= false;
hidden: boolean = false;
showSpinner : boolean = false;



myForm:FormGroup = this.fb.group({
name:    ['', [Validators.required]],
email:   ['', [Validators.required,Validators.pattern( this.validatorservice.emailPattern)]],
phone:   ['', [Validators.required]],
message :['']
});



  constructor(
              private messageService: CardsService,
              private validatorservice : ValidatorService,
              private router : Router,
              private fb : FormBuilder,
  ) { 

  }


  validField( field: string ) {

    return this.myForm.controls[field].errors 
            && this.myForm.controls[field].touched;
  }
  

  ngOnInit(): void {
 
    if(screen.width > 300 && screen.width < 574){
    this.hidden = true;
    }


  }

  
    sendForm (){
      if ( this.myForm.invalid ) {
        this.myForm.markAllAsTouched();
        return;
      }
     
      this.showSpinner = true;
      // console.log("form value", this.myForm.value)
  
        this.messageService.sendMessage(this.myForm.value).subscribe( (res) => {
            if (res=='true') {
              alert('Mensaje Enviado correctamente!!')
          //     Swal.fire({
          //       position: 'center',
          //       icon: 'success',
          //       title: 'Mensaje Enviado correctamente!!',
          //       showConfirmButton: false,
          //       timer: 3000
          //       });
                this.clicked = true;
                this.showSpinner = false;
                this.myForm.reset();
       
           }
          })    
              
   }
}