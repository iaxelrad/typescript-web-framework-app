import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
interface UserProps {
  id?: number;
  name?: string; // '?:' means it's an optional property
  age?: number;
}

const BASE_URL = 'http://localhost:3000/';
export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); // Takes second argument data and inserts into first.
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
