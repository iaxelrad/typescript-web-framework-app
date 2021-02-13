export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    // <K extends keyof T> - Sets up a generic constraint. K can only be one of the keys of T.
    // key: K - key can only be of Type K.
    // T[K] - standard object lookup. returns the value of property K inside T.
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update); // Takes second argument data and inserts into first.
  }
}
