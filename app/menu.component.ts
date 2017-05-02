import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: '/app/templates/Menu.html'
})
export class MenuComponent  {
	
	message='';
		AddNote() {
		this.message ="message reçus";
		}
}