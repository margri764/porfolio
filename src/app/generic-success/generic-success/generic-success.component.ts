import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-generic-success',
  templateUrl: './generic-success.component.html',
  styleUrls: ['./generic-success.component.css']
})
export class GenericSuccessComponent implements OnInit {


  confirm : boolean = false; 
  constructor(
              private dialogRef : MatDialogRef<GenericSuccessComponent>,
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
