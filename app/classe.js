"use strict";
var Category = (function () {
    function Category(label, id) {
        this.label = label;
        this.id = id;
    }
    return Category;
}());
exports.Category = Category;
var Note = (function () {
    function Note(id, title, content, date, category) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.category = category;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=classe.js.map