class School {
  _areas: TArea[] = [];
  _lecturers: TLecturer[] = [];

  get areas(): TArea[] {
    return this._areas;
  }

  get lecturers(): TLecturer[] {
    return this._lecturers;
  }

  addArea(addedArea: TArea): void {
    this._areas.push(addedArea);
  }

  removeArea(removedArea: TArea): void {
    this._areas.filter((area) => area != removedArea);
  }

  addLecturer(addedLecturer: TLecturer): void {
    this._lecturers.push(addedLecturer);
  }

  removeLecturer(removedLecturer: TLecturer): void {
    this._lecturers.filter((lecturer) => lecturer != removedLecturer);
  }
}

type TLecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string;
  contacts: string;
};

type TArea = {
  name: string;
  levels: TLevel[];
};

class Area {
  _name: string;
  _levels: TLevel[] = [];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): TLevel[] {
    return this._levels;
  }

  addLevel(addedLevel: TLevel): void {
    this._levels.push(addedLevel);
  }

  removeLevel(removedLevel: TLevel): void {
    this._levels.filter((level) => level != removedLevel);
  }
}

type TLevel = {
  name: string;
  description: string;
  groups: TGroup[];
};

class Level {
  _name: string;
  _description: string;
  _groups: TGroup[] = [];

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): TGroup[] {
    return this._groups;
  }

  addGroup(addedGroup: TGroup): void {
    this._groups.push(addedGroup);
  }

  removeGroup(removedGroup: TGroup): void {
    this._groups.filter((group) => group != removedGroup);
  }
}

type TGroup = {
  area: string;
  status: string;
  students: TStudent[];
  directionName: string;
  levelName: string;
};

class Group {
  _area: string = "";
  _status: string = "";
  _students: TStudent[] = [];
  _directionName: string;
  _levelName: string;

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  get area(): string {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): TStudent[] {
    return this._students;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  addStudent(addedStudent: TStudent): void {
    this._students.push(addedStudent);
  }

  removeStudent(removedStudent: TStudent): void {
    this._students.filter((student) => student != removedStudent);
  }

  setStatus(status: string): void {
    this._status = status;
  }

  showPerformance(): TStudent[] {
    const sortedStudents = [...this._students].sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    console.log(...this._students);
    console.log(sortedStudents);

    return sortedStudents;
  }
}

type TStudent = {
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: TGrade[];
  _visits: TVisit[];
  getPerformanceRating: () => number;
};

class Student {
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: TGrade[] = [];
  _visits: TVisit[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(grade: TGrade) {
    this._grades.push(grade);
  }

  set visit(visit: TVisit) {
    this._visits.push(visit);
  }

  getPerformanceRating(): number {
    if (!this._grades.length) return 0;

    const averageGrade =
      this._grades.reduce((sum, grade) => sum + grade.mark, 0) /
      this._grades.length;

    return averageGrade;
  }
}

type TGrade = {
  workName: string;
  mark: number;
};

type TVisit = {
  lesson: string;
  present: boolean;
};

export { School, Area, Level, Group, Student };
