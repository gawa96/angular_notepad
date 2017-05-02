import { Component } from '@angular/core';
export class OneNote{
  id: number;
  title: string;
  categorie:string;
  contenue : string;
  date: string;
}

const NOTE: OneNote[] =[
	{ id: 1,title: 'test', categorie: 'testdecategorie', contenue:'ceci est un test', date:'12/04/2018' }, 
	{ id: 2,title: 'test2', categorie: 'testdelacategorie', contenue:'ceci est un test', date:'12/05/2014' }
 ];

@Component({
  selector: 'note',
  templateUrl: 'app/templates/NoteListe.html'

})
export class NoteComponent  {
  notes = NOTE;
  ModifiedNote() {
    

  //trouvé une solution pour afficher uniquement le modifyNote quand on appuie sur le bouton


  }
}
