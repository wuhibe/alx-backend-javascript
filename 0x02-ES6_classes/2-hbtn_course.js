const assert = require('assert');

export default class HolbertonCourse {
  constructor(name, length, students) {
    assert(typeof (name) === 'string', TypeError('Name must be a string'));
    assert(typeof (length) === 'number', TypeError('Length must be a number'));
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name
  get name() {
    return this._name;
  }

  set name(name) {
    assert(typeof (name) === 'string', TypeError('Name must be a string'));
    this._name = name;
  }

  // length
  get length() {
    return this._length;
  }

  set length(length) {
    assert(typeof (length) === 'number', TypeError('Length must be a number'));
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
