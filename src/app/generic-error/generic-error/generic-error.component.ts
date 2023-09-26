import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.css']
})
export class GenericErrorComponent implements OnInit {

  confirm : boolean = false; 
  constructor(
              private dialogRef : MatDialogRef<GenericErrorComponent>,
              private cardService : CardsService

  ) { }

  ngOnInit(): void {

  }

  continue(){
    this.confirm = true;
    setTimeout(()=>{this.dialogRef.close()},200);
    this.cardService.closeBottomSheet$.emit(true);
    
  }
}
