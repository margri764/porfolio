import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from 'src/app/contactUs/contact-us/contact-us.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show:boolean= true;
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showToolbar(){
    this.show= !this.show

}
openDialog() {
  const dialogRef = this.dialog.open(ContactUsComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
