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
var classe_1 = require('./classe');
var classe_2 = require('./classe');
var NoteEditorComponent = (function () {
    function NoteEditorComponent() {
        this.closeModify = new core_1.EventEmitter();
    }
    //We copy the object to the initialisation
    NoteEditorComponent.prototype.ngOnInit = function () {
        this.oldNote = Object.assign({}, this.noteEdit);
    };
    //We send a message to the parent to close the window & to save the note
    NoteEditorComponent.prototype.SaveNote = function (noteEdit) {
        this.closeModify.emit(noteEdit);
    };
    //When canceling, we put the old values in the real object.
    NoteEditorComponent.prototype.CancelEdit = function () {
        this.closeModify.emit(this.noteEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', classe_1.Note)
    ], NoteEditorComponent.prototype, "noteEdit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', classe_2.Category)
    ], NoteEditorComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NoteEditorComponent.prototype, "closeModify", void 0);
    NoteEditorComponent = __decorate([
        core_1.Component({
            selector: 'noteeditor',
            templateUrl: 'app/templates/noteEdit.html',
        }), 
        __metadata('design:paramtypes', [])
    ], NoteEditorComponent);
    return NoteEditorComponent;
}());
exports.NoteEditorComponent = NoteEditorComponent;
//# sourceMappingURL=noteEditor.component.js.map