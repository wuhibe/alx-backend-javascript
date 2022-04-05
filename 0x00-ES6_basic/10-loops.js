export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
    for (let idx of array) {
    // eslint-disable-next-line
        idx = `${appendString}${idx}`;
  }
  return array;
}
