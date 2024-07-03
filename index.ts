class School {
  _areas: string[];
  _lecturers: TLecturer[];

  get areas() {
    return this._areas;
  }

  get lecturers() {
    return this._lecturers;
  }

  addArea(addedArea: string): void {
    this._areas.push(addedArea);
  }

  removeArea(removedArea: string): void {
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

class Area {
  _name: string;
  _levels: string[];

  constructor(name: string) {
    this._name = name;
  }

  get areas() {
    return this._name;
  }

  get lecturers() {
    return this._levels;
  }

  addLevel(addedLevel: string): void {
    this._levels.push(addedLevel);
  }

  removeLevel(removedLevel: string): void {
    this._levels.filter((level) => level != removedLevel);
  }
}

class Level {
  _name: string;
  _description: string;
  _groups: string[];

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get groups() {
    return this._groups;
  }

  addGroup(addedGroup: string): void {
    this._groups.push(addedGroup);
  }

  removeGroup(removedGroup: string): void {
    this._groups.filter((level) => level != removedGroup);
  }
}

class Group {
  _area: string;
  _status: string;
  _students: string[]; // Modify the array so that it has a valid toSorted method*
  _directionName: string;
  _levelName: string;

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  get area() {
    return this._area;
  }

  get status() {
    return this._status;
  }

  get students() {
    return this._students;
  }

  get directionName() {
    return this._directionName;
  }

  get levelName() {
    return this._levelName;
  }

  addStudent(addedStudent: string): void {
    this._students.push(addedStudent);
  }

  removeStudent(removedStudent: string): void {
    this._students.filter((level) => level != removedStudent);
  }

  setStatus(status: string): void {
    this._status = status;
  }

  // showPerformance() {
  //   const sortedStudents = this._students.toSorted(
  //     (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
  //   );
  //   return sortedStudents;
  // }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: object[];
  _visits: object[];

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

  set grade({ workName: string, mark: number }) {
    this._grades.push({ workName: string, mark: number });
  }

  set visit({ lesson: string, isPresent: boolean }) {
    this._visits.push({ lesson: string, isPresent: boolean });
  }

  // getPerformanceRating() {
  //   const gradeValues: object[] = Object.values(this._grades.);

  //   if (!gradeValues.length) return 0;

  //   const averageGrade =
  //     gradeValues.reduce((sum, grade) => sum + grade.mark, 0) / gradeValues.length;
  //   const attendancePercentage =
  //     (this._visits.filter((present) => present).length / this._visits.length) *
  //     100;

  //   return (averageGrade + attendancePercentage) / 2;
  // }
}
