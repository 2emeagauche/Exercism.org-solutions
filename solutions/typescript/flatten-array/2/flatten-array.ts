type ArrayOfAnyButArray<T> = T extends readonly any[] ? never : T;

export function flatten<T>(array: unknown[]): ArrayOfAnyButArray<T>[] {
  const a: ArrayOfAnyButArray<T>[] = [];
  function recursive(arr: unknown[]) {
    for (const i of arr) {
      if (Array.isArray(i)) {
        recursive(i);
      } else if (i !== undefined) {
        a.push(i as ArrayOfAnyButArray<T>);
      }
    }
  }
  recursive(array);
  return a;
}