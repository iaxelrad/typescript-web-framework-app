import { Model } from './Model';
export interface UserProps {
  id?: number;
  name?: string; // '?:' means it's an optional property
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {}
