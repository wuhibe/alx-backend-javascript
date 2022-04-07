import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}
class NewBuilding extends Building {
  evacuationWarningMessage() {
    console.log('Abracadabra');
  }
}
try {
  new NewBuilding(123);
} catch (err) {
  console.log(err);
}
try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}
