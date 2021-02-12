interface UserProps {
  name?: string; // '?:' means it's an optional property
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Takes second argument data and inserts into first.
  }
}
