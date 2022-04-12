export default function cleanSet(set, str) {
    if (str === '') return '';
    const iterable = set.values();
    const arr = [];
    for (const val of iterable) {
        if (val.startsWith(str)) arr.push(val.replace(str, ''));
    }
    return arr.join('-');
}