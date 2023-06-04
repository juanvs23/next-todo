export interface UserData {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  avatar?: string | null;
  password: string;
  status: userStatus;
}
export enum userStatus {
  active = 'active',
  pending = 'pending',
  inactive = 'inactive',
}
export interface UserState {
  users: UserData[];
  addUser: (arg0: UserData) => void;
  changeStatus: (arg0: UserData) => void;
  getUsers: () => void;
  deleteUser: (arg0: string) => void;
}
