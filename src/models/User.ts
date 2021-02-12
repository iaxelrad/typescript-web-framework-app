interface UserProps {
  name?: string; // '?:' means it's an optional property
  age?: number;
}

type CallBack = () => {}; //Creating a Type alias.

export class User {
  events: { [key: string]: CallBack[] };

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Takes second argument data and inserts into first.
  }

  on(eventName: string, callback: CallBack) {}
}
