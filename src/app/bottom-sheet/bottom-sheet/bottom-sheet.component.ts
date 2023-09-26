import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { GenericErrorComponent } from 'src/app/generic-error/generic-error/generic-error.component';
import { GenericSuccessComponent } from 'src/app/generic-success/generic-success/generic-success.component';
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
  email:   ['', [Validators.required,Validators.pattern( this.validatorservice.emailPattern)]],

  message :['']
  });
  
  
  
    constructor(
                private cardService: CardsService,
                private validatorservice : ValidatorService,
                private fb : FormBuilder,
                private _bottomSheet: MatBottomSheet,
                private dialog : MatDialog
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

      this.cardService.closeBottomSheet$.subscribe( (emmited)=>{ if(emmited){this.close()} })
  
  
    }

    close(){
      this._bottomSheet.dismiss();
    }
  
    
    sendForm() {
      if (this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }
    
      this.showSpinner = true;
    
      this.cardService.sendMessage(this.myForm.value)
        .pipe(
          catchError(error => {
            console.error('Ocurrió un error al enviar el mensaje:', error);
            this.showSpinner = false;
            this.openGenericError();

            // Aquí puedes realizar acciones adicionales si lo deseas, como mostrar un mensaje de error.
            return [];
          })
        )
        .subscribe((res) => {
          if (res === 'true') {
            this.clicked = true;
            this.showSpinner = false;
            this.myForm.reset();
            this.openGenericSuccess();
          }
        });
    }


    openGenericError(){

      let width : string = '';
      let height : string = '';
  
      if(screen.width >= 800) {
        width = "400px"
        height ="500px";
      }
      this.dialog.open(GenericErrorComponent, {
        width: `${width}`|| "",
        height:`${height}`|| "",
        disableClose: true,
        panelClass:"custom-modalbox-NoMoreComponent", 
      });
    
    }

    openGenericSuccess(){

      let width : string = '';
      let height : string = '';
  
      if(screen.width >= 800) {
        width = "400px"
        height ="500px";
      }
      this.dialog.open(GenericSuccessComponent, {
        width: `${width}`|| "",
        height:`${height}`|| "",
        disableClose: true,
        panelClass:"custom-modalbox-NoMoreComponent", 
      });
    
    }
  
  
    
    
  }