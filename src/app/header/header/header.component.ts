import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetComponent } from 'src/app/bottom-sheet/bottom-sheet/bottom-sheet.component';
import { ContactUsComponent } from 'src/app/contactUs/contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(
                private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }


openBottomSheet() {
  this._bottomSheet.open(BottomSheetComponent);
}
}
