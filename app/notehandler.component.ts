import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'noteHandler',
  templateUrl: '/app/templates/NoteHandler.html'
})
export class NotehandlerComponent  {
	
	@Input() note: Note;
	@Output() deleteNote:EventEmitter<any> = new EventEmitter();
	@Output() SaveNote:EventEmitter<any> = new EventEmitter();
}