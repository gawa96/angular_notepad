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
var NotehandlerComponent = (function () {
    function NotehandlerComponent() {
        this.deleteNote = new core_1.EventEmitter();
        this.SaveNote = new core_1.EventEmitter();
        this.modifying = false;
    }
    //We close the window and we send a message to the parent to save the note
    NotehandlerComponent.prototype.closeModify = function (note) {
        this.modifying = false;
        this.SaveNote.emit(note);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', classe_1.Note)
    ], NotehandlerComponent.prototype, "note", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotehandlerComponent.prototype, "deleteNote", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotehandlerComponent.prototype, "SaveNote", void 0);
    NotehandlerComponent = __decorate([
        core_1.Component({
            selector: 'noteHandler',
            templateUrl: '/app/templates/NoteHandler.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NotehandlerComponent);
    return NotehandlerComponent;
}());
exports.NotehandlerComponent = NotehandlerComponent;
//# sourceMappingURL=notehandler.component.js.map