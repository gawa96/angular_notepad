import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'noteeditor',
  templateUrl: 'app/templates/noteEdit.html',
})
export class NoteEditorComponent{ 

	@Input() noteEdit: note;
	@Output() closeModify:EventEmitter<any> = new EventEmitter();

	}