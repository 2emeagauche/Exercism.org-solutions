type NotArray<T> = T extends readonly any[] ? never : T;

export function flatten<T>(array: unknown[]): NotArray<T>[] {
  const a: NotArray<T>[] = [];
  function recursive(arr: unknown[]) {
    for (const i of arr) {
      if (Array.isArray(i)) {
        recursive(i);
      } else if (i !== undefined) {
        a.push(i as NotArray<T>);
      }
    }
  }
  recursive(array);
  return a;
}