export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // length
  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  // students
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
