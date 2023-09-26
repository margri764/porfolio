import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

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
                private cardService: CardsService,
                private validatorservice : ValidatorService,
                private router : Router,
                private fb : FormBuilder,
                private _bottomSheet: MatBottomSheet,
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

    close(){
      this._bottomSheet.dismiss();
    }
  
    
      sendForm (){
        // if ( this.myForm.invalid ) {
        //   this.myForm.markAllAsTouched();
        //   return;
        // }
       
        this.showSpinner = true;
        console.log("form value", this.myForm.value)
    
          this.cardService.sendMessage(this.myForm.value).subscribe( (res) => {
              if (res=='true') {
                alert('Mensaje Enviado correctamente!!')
                  this.clicked = true;
                  this.showSpinner = false;
                  this.myForm.reset();
         
             }
            })    
                
     }
  }