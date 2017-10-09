import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { FooterComponent } from "./footer.component";

 
@NgModule({
    imports: [BrowserModule], 
    declarations: [
       
        FooterComponent
    ], 
    bootstrap: [
        
        FooterComponent 
    ] 
})

export class FooterModule {

}