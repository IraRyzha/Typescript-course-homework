var formatDate = function (date) {
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hours, ":").concat(minutes);
};
var TodoList = /** @class */ (function () {
    function TodoList(_notes) {
        if (_notes === void 0) { _notes = []; }
        this._notes = _notes;
    }
    Object.defineProperty(TodoList.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    TodoList.prototype.getNumberOfNotes = function () {
        return this._notes.length;
    };
    TodoList.prototype.getNumberOfUncompletedNotes = function () {
        var numberOfUncompletedNotes = 0;
        this._notes.forEach(function (note) {
            if (!note.completedStatus) {
                numberOfUncompletedNotes++;
            }
        });
        return numberOfUncompletedNotes;
    };
    TodoList.prototype.addNote = function (note) {
        var _a;
        if (Array.isArray(note)) {
            (_a = this._notes).push.apply(_a, note);
        }
        else {
            this._notes.push(note);
        }
    };
    TodoList.prototype.removeNote = function (title) {
        this._notes = this._notes.filter(function (note) { return note.title !== title; });
    };
    TodoList.prototype.editNote = function (title, updatedContent) {
        this._notes.forEach(function (note) {
            if (note.title === title) {
                if (note.requiresConfirmation) {
                    var confirmed = confirm("This note requires confirmation. Do you want to edit?");
                    if (!confirmed)
                        return;
                }
                note.content = updatedContent;
                note.dateOfEditing = formatDate(new Date());
            }
        });
    };
    TodoList.prototype.getNoteFullInfo = function (title) {
        var selectedNote = this._notes.find(function (note) { return note.title === title; });
        return "\n      Title: ".concat(selectedNote === null || selectedNote === void 0 ? void 0 : selectedNote.title, ",\n      Content: ").concat(selectedNote === null || selectedNote === void 0 ? void 0 : selectedNote.content, ", \n      Date of creation: ").concat(selectedNote === null || selectedNote === void 0 ? void 0 : selectedNote.dateOfCreation, ",\n      Date of editing: ").concat(selectedNote === null || selectedNote === void 0 ? void 0 : selectedNote.dateOfEditing, ",\n      Is completed: ").concat(selectedNote === null || selectedNote === void 0 ? void 0 : selectedNote.completedStatus, " \n    ");
    };
    TodoList.prototype.markNoteAsCompleted = function (title) {
        this._notes.forEach(function (note) {
            if (note.title === title) {
                note.completedStatus = true;
            }
        });
    };
    TodoList.prototype.searchNotes = function (query) {
        return this._notes.filter(function (note) { return note.title.includes(query) || note.content.includes(query); });
    };
    TodoList.prototype.sortNotes = function (by) {
        if (by === "status") {
            return this._notes.sort(function (a, b) { return Number(b.completedStatus) - Number(a.completedStatus); });
        }
        else if (by === "date") {
            return this._notes.sort(function (a, b) {
                return new Date(b.dateOfCreation).getTime() -
                    new Date(a.dateOfCreation).getTime();
            });
        }
        else {
            return this._notes;
        }
    };
    return TodoList;
}());
// Using App
var TodoListApp = new TodoList();
var getRandomDate = function () {
    var start = new Date(2000, 0, 1);
    var end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
var myNotes = [
    {
        title: "Note 1",
        content: "Content of note 1",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: false,
    },
    {
        title: "Note 2",
        content: "Content of note 2",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: true,
    },
    {
        title: "Note 3",
        content: "Content of note 3",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: false,
    },
    {
        title: "Note 4",
        content: "Content of note 4",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: true,
    },
    {
        title: "Note 5",
        content: "Content of note 5",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: false,
    },
    {
        title: "Note 6",
        content: "Content of note 6",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: true,
    },
    {
        title: "Note 7",
        content: "Content of note 7",
        dateOfCreation: formatDate(getRandomDate()),
        dateOfEditing: formatDate(getRandomDate()),
        completedStatus: false,
    },
];
TodoListApp.addNote(myNotes);
console.log(TodoListApp.notes);
console.log(TodoListApp.searchNotes("Content of note 1"));
console.log(" ");
console.log(TodoListApp.notes);
console.log(TodoListApp.sortNotes("status"));
console.log(" ");
console.log(TodoListApp.notes);
console.log(TodoListApp.sortNotes("date"));
console.log(" ");
console.log(TodoListApp.notes);
console.log(TodoListApp.getNumberOfUncompletedNotes());
console.log(" ");
console.log(TodoListApp.getNumberOfNotes());
TodoListApp.removeNote("Note 4");
console.log(TodoListApp.getNumberOfNotes());
console.log(" ");
console.log(TodoListApp.getNoteFullInfo("Note 3"));
TodoListApp.editNote("Note 3", "NEW!!! Content of note 3");
console.log(TodoListApp.getNoteFullInfo("Note 3"));
TodoListApp.markNoteAsCompleted("Note 3");
console.log(TodoListApp.getNoteFullInfo("Note 3"));
console.log(" ");
console.log(TodoListApp.notes);
console.log(" ");
