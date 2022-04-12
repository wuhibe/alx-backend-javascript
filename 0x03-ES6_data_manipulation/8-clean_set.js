export default function cleanSet(set, str) {
  const iterable = set.values();
  const arr = [];
  for (let val of iterable) {
    if (val.includes(str, 0)) {
      val = val.replace(str, '');
      arr.push(val);
    }
  }
  return arr.join('-');
}
