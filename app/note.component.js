"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OneNote = (function () {
    function OneNote() {
    }
    return OneNote;
}());
exports.OneNote = OneNote;
var NOTE = [
    { id: 1, title: 'test', categorie: 'testdecategorie', contenue: 'ceci est un test', date: '12/04/2018' },
    { id: 2, title: 'test2', categorie: 'testdelacategorie', contenue: 'ceci est un test', date: '12/05/2014' }
];
var NoteComponent = (function () {
    function NoteComponent() {
        this.notes = NOTE;
    }
    NoteComponent.prototype.ModifiedNote = function () {
        //trouvé une solution pour afficher uniquement le modifyNote quand on appuie sur le bouton
    };
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'note',
            templateUrl: 'app/templates/NoteListe.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map