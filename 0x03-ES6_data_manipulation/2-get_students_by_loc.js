export default function getStudentsByLocation(arr) {
    if (!(arr instanceof Array)) return [];
    return arr.filter((x) => x['location'] == 'San Francisco');
}