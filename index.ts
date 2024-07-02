class School {
  _directions: TDirection[] = [];

  addDirection(direction: TDirection): void {
    this._directions.push(direction);
  }
}

type TDirection = {
  name: string;
  levels: TLevel[];
  addLevel: (level: TLevel) => void;
};

class Direction {
  _name: string;
  levels: TLevel[] = [];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: TLevel): void {
    this.levels.push(level);
  }
}

type TLevel = {
  name: string;
  program: string;
  groups: TGroup[];
};

class Level {
  _name: string;
  _program: string;
  groups: TGroup[] = [];

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: TGroup): void {
    this.groups.push(group);
  }
}

type TGroup = {
  students: TStudent[];
  directionName: string;
  levelName: string;
  addStudent: (student: TStudent) => void;
  showPerformance: () => TStudent[];
};

class Group {
  _students: TStudent[] = [];
  directionName: string;
  levelName: string;

  get students(): TStudent[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: TStudent): void {
    this._students.push(student);
  }

  showPerformance(): TStudent[] {
    const sortedStudents = this.students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

type TStudent = {
  firstName: string;
  lastName: string;
  birthYear: number;
  grades: any;
  attendance: boolean[];
  setGrade: (subject: string, grade: number) => void;
  markAttendance: (present: boolean) => void;
  getPerformanceRating: () => number;
};

class Student {
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: any = {};
  attendance: boolean[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this._grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this._grades);

    console.log("gradeValues");
    console.log(gradeValues);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    return averageGrade;
  }
}

export { School, Direction, Level, Group, Student };
