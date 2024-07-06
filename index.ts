interface ISchool {
  _areas: IArea[];
  _lecturers: TLecturer[];
  addArea(addedArea: IArea): void;
  removeArea(removedArea: IArea): void;
  addLecturer(addedLecturer: TLecturer): void;
  removeLecturer(removedLecturer: TLecturer): void;
}

class School implements ISchool {
  _areas: IArea[] = [];
  _lecturers: TLecturer[] = [];

  get areas(): IArea[] {
    return this._areas;
  }

  get lecturers(): TLecturer[] {
    return this._lecturers;
  }

  addArea(addedArea: IArea): void {
    this._areas.push(addedArea);
  }

  removeArea(removedArea: IArea): void {
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

interface IArea {
  name: string;
  levels: ILevel[];
}

class Area {
  _name: string;
  _levels: ILevel[] = [];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): ILevel[] {
    return this._levels;
  }

  addLevel(addedLevel: ILevel): void {
    this._levels.push(addedLevel);
  }

  removeLevel(removedLevel: ILevel): void {
    this._levels.filter((level) => level != removedLevel);
  }
}

interface ILevel {
  name: string;
  description: string;
  groups: IGroup[];
}

class Level {
  _name: string;
  _description: string;
  _groups: IGroup[] = [];

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

  get groups(): IGroup[] {
    return this._groups;
  }

  addGroup(addedGroup: IGroup): void {
    this._groups.push(addedGroup);
  }

  removeGroup(removedGroup: IGroup): void {
    this._groups.filter((group) => group != removedGroup);
  }
}

interface IGroup {
  area: string;
  status: string;
  students: IStudent[];
  directionName: string;
  levelName: string;
}

class Group {
  _area: string = "";
  _status: string = "";
  _students: IStudent[] = [];
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

  get students(): IStudent[] {
    return this._students;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  addStudent(addedStudent: IStudent): void {
    this._students.push(addedStudent);
  }

  removeStudent(removedStudent: IStudent): void {
    this._students.filter((student) => student != removedStudent);
  }

  setStatus(status: string): void {
    this._status = status;
  }

  showPerformance(): IStudent[] {
    const sortedStudents = [...this._students].sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    console.log(...this._students);
    console.log(sortedStudents);

    return sortedStudents;
  }
}

interface IStudent {
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: TGrade[];
  _visits: TVisit[];
  getPerformanceRating: () => number;
}

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
