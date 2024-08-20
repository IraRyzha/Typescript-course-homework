const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

interface INote {
  title: string;
  content: string;
  dateOfCreation: string;
  dateOfEditing: string;
  completedStatus: boolean;
  editContent(value: string): void;
  markNoteAsCompleted(): void;
}

class Note implements INote {
  constructor(
    public title: string,
    public content: string,
    public dateOfCreation: string,
    public dateOfEditing: string,
    public completedStatus: boolean
  ) {}

  editContent(newContent: string): void {
    this.content = newContent;
    this.dateOfEditing = formatDate(new Date());
  }

  markNoteAsCompleted() {
    this.completedStatus = true;
  }
}

class TodoList {
  constructor(private _notes: INote[] = []) {}

  public get notes(): INote[] {
    return this._notes;
  }

  getNumberOfNotes(): number {
    return this._notes.length;
  }

  getNumberOfUncompletedNotes(): number {
    let numberOfUncompletedNotes: number = 0;
    this._notes.forEach((note) => {
      if (!note.completedStatus) {
        numberOfUncompletedNotes++;
      }
    });
    return numberOfUncompletedNotes;
  }

  addNote(note: INote | INote[]): void {
    if (Array.isArray(note)) {
      this._notes.push(...note);
    } else {
      this._notes.push(note);
    }
  }

  removeNote(title: string): void {
    this._notes = this._notes.filter((note) => note.title !== title);
  }

  editNote(title: string, updatedContent: string): void {
    this._notes.find((note) => {
      if (note.title === title) {
        note.editContent(updatedContent);
      }
    });
  }

  getNoteFullInfo(title: string): string {
    const selectedNote = this._notes.find((note) => note.title === title);
    return `
      Title: ${selectedNote?.title},
      Content: ${selectedNote?.content}, 
      Date of creation: ${selectedNote?.dateOfCreation},
      Date of editing: ${selectedNote?.dateOfEditing},
      Is completed: ${selectedNote?.completedStatus} 
    `;
  }

  markNoteAsCompleted(title: string, isAllowToEdit: boolean): void {
    this._notes.forEach((note) => {
      if (note.title === title) {
        isAllowToEdit && note.markNoteAsCompleted();
      }
    });
  }

  searchNotes(query: string): INote[] {
    return this._notes.filter(
      (note) => note.title.includes(query) || note.content.includes(query)
    );
  }

  sortNotes(by: "status" | "date"): INote[] {
    if (by === "status") {
      return this._notes.sort(
        (a, b) => Number(b.completedStatus) - Number(a.completedStatus)
      );
    } else if (by === "date") {
      return this._notes.sort(
        (a, b) =>
          new Date(b.dateOfCreation).getTime() -
          new Date(a.dateOfCreation).getTime()
      );
    } else {
      return this._notes;
    }
  }
}

// Using App

const TodoListApp = new TodoList();

const getRandomDate = (): Date => {
  const start = new Date(2000, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const myNotes = [
  new Note(
    "Note 1",
    "Content of note 1",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    false
  ),
  new Note(
    "Note 2",
    "Content of note 2",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    true
  ),
  new Note(
    "Note 3",
    "Content of note 3",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    false
  ),
  new Note(
    "Note 4",
    "Content of note 4",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    true
  ),
  new Note(
    "Note 5",
    "Content of note 5",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    false
  ),
  new Note(
    "Note 6",
    "Content of note 6",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    true
  ),
  new Note(
    "Note 7",
    "Content of note 7",
    formatDate(getRandomDate()),
    formatDate(getRandomDate()),
    false
  ),
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
TodoListApp.markNoteAsCompleted("Note 3", true);
console.log(TodoListApp.getNoteFullInfo("Note 3"));

console.log(" ");

console.log(TodoListApp.notes);

console.log(" ");
