export const weakMap = new WeakMap();
let count = 1;
export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const idx = count - 1;
  if (idx - 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
