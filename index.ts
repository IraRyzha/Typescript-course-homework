interface INote {
  title: string;
  content: string;
  dateOfCreation: string;
  dateOfEditing: string;
  completedStatus: boolean;
  requiresConfirmation?: boolean;
}

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

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
    this._notes.forEach((note) => {
      if (note.title === title) {
        if (note.requiresConfirmation) {
          const confirmed = confirm(
            "This note requires confirmation. Do you want to edit?"
          );
          if (!confirmed) return;
        }
        note.content = updatedContent;
        note.dateOfEditing = formatDate(new Date());
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

  markNoteAsCompleted(title: string): void {
    this._notes.forEach((note) => {
      if (note.title === title) {
        note.completedStatus = true;
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
