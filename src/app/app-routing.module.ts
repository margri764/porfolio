import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';
import { HomeComponent } from './home/home/home.component';




  const routes: Routes = [
    { path: 'contact-us', component: ContactUsComponent}, 
    { path: 'home', component: HomeComponent},
    { path: '**', redirectTo: 'home'}
];


  @NgModule({
    imports: [
        RouterModule.forRoot( routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

