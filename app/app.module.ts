import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import { NoteComponent } from './note.component';
import { NotehandlerComponent } from './notehandler.component';
import { AppRoutingModule }     from './app-routing.module';	

@NgModule({
  imports: [ BrowserModule ],

  declarations: [ AppComponent, MenuComponent, NoteComponent, NotehandlerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
