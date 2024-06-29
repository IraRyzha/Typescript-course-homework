import { School, Direction, Level, Group, Student } from "./index";

// CREATE MAIN OBJECTS

const SchoolObject = new School();

const DirectionObjectTechnology = new Direction("Technology");

const LevelObjectFrontend = new Level("Frontend development", "Base");
const LevelObjectFullstack = new Level("Fullstack development", "Advanced");
const LevelObjectBlockchain = new Level("Blockchain development", "Pro");

const GroupObjectFrontendBase = new Group(
  "Technology",
  "Frontend development - base"
);
const GroupObjectFullstackAdvanced = new Group(
  "Technology",
  "Fullstack development - Advanced"
);
const GroupObjectBlockchainPro = new Group(
  "Technology",
  "Blockchain development - Pro"
);

const StudentIra = new Student("Ira", "Ryzha", 2006);
const StudentTom = new Student("Tom", "Uduf", 2003);
const StudentSara = new Student("Sara", "Rbsdhs", 1998);
const StudentGenry = new Student("Genry", "Gagsg", 2010);
const StudentMark = new Student("Mark", "Ojsds", 2005);

StudentIra.setGrade("Web", 11);
StudentIra.setGrade("Fullstack", 8);
StudentIra.setGrade("Crypto", 10);

StudentMark.setGrade("Web", 11);
StudentMark.setGrade("Fullstack", 6);
StudentMark.setGrade("Crypto", 7);

StudentSara.setGrade("Web", 7);
StudentSara.setGrade("Fullstack", 10);
StudentSara.setGrade("Crypto", 5);

StudentGenry.setGrade("Web", 2);

// Planning school learning system

SchoolObject.addDirection(DirectionObjectTechnology);

DirectionObjectTechnology.addLevel(LevelObjectFrontend);
DirectionObjectTechnology.addLevel(LevelObjectFullstack);
DirectionObjectTechnology.addLevel(LevelObjectBlockchain);

LevelObjectFrontend.addGroup(GroupObjectFrontendBase);
LevelObjectFullstack.addGroup(GroupObjectFullstackAdvanced);
LevelObjectBlockchain.addGroup(GroupObjectBlockchainPro);

GroupObjectFrontendBase.addStudent(StudentMark);
GroupObjectFrontendBase.addStudent(StudentIra);

GroupObjectFullstackAdvanced.addStudent(StudentIra);
GroupObjectFullstackAdvanced.addStudent(StudentSara);

GroupObjectBlockchainPro.addStudent(StudentTom);
GroupObjectBlockchainPro.addStudent(StudentIra);
GroupObjectBlockchainPro.addStudent(StudentGenry);

// Try interaction between differennt objects

// console.log(SchoolObject);
// console.log(SchoolObject._directions[0].levels);

// console.log(" ");

// console.log(DirectionObjectTechnology);

// console.log(" ");

// console.log(LevelObjectFrontend);
// console.log(LevelObjectFullstack);
// console.log(LevelObjectBlockchain);

// console.log(" ");

// console.log(GroupObjectFrontendBase);
// console.log(GroupObjectFullstackAdvanced);
// console.log(GroupObjectBlockchainPro);

// console.log(" ");

// console.log(StudentIra);
// console.log(StudentTom);
// console.log(StudentSara);
// console.log(StudentGenry);
// console.log(StudentMark);

console.log(" ");

console.log(`Group ${GroupObjectFrontendBase.levelName} performence`);
GroupObjectFrontendBase.showPerformance().forEach((student) =>
  console.log(student)
);

console.log(" ");

console.log(`Group ${GroupObjectFullstackAdvanced.levelName} performence`);
GroupObjectFullstackAdvanced.showPerformance().forEach((student) =>
  console.log(student)
);

console.log(" ");

console.log(`Group ${GroupObjectBlockchainPro.levelName} performence`);
GroupObjectBlockchainPro.showPerformance().forEach((student) =>
  console.log(student)
);
