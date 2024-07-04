import { School, Area, Level, Group, Student } from "./index";

const SchoolObject = new School();

const AreaObject = new Area("Computer Science");

const LevelObject = new Level("Medium", "Programming");

const GroupObject = new Group("Web Development", "Medium");

const StudentIra = new Student("Ira", "Ryzha", 2006);

SchoolObject.addArea(AreaObject);

AreaObject.addLevel(LevelObject);

LevelObject.addGroup(GroupObject);

StudentIra.grade = { workName: "Math", mark: 11 };
StudentIra.grade = { workName: "Programming", mark: 12 };
StudentIra.grade = { workName: "English", mark: 10 };
StudentIra.grade = { workName: "Sport", mark: 8 };
StudentIra.grade = { workName: "Other", mark: 16 };

StudentIra.visit = { lesson: "Math", present: true };

console.log(StudentIra);
console.log(StudentIra.getPerformanceRating());

GroupObject.addStudent(StudentIra);

console.log(GroupObject);
