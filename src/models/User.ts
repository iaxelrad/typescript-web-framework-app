import axios, { AxiosResponse } from 'axios';
interface UserProps {
  id?: number;
  name?: string; // '?:' means it's an optional property
  age?: number;
}

type CallBack = () => void; //Creating a Type alias.
const BASE_URL = 'http://localhost:3000/';
export class User {
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Takes second argument data and inserts into first.
  }

  on(eventName: string, callback: CallBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    const id = this.get('id');
    axios
      .get(`${BASE_URL}users/${id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`${BASE_URL}users/${id}`, this.data);
    } else {
      axios.post(`${BASE_URL}users`, this.data);
    }
  }
}
