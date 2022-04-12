export default function cleanSet(set, str) {
  if (str === '' || !(typeof str === 'string')) return '';
  const arr = [];
  for (const val of set) {
    if (val.startsWith(str)) arr.push(val.replace(str, ''));
  }
  return arr.join('-');
}
