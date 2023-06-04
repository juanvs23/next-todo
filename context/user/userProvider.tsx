import React, { FC, useEffect, useReducer } from 'react';
import { createAxios } from '@/axios';
import { UserData, UserState, userStatus } from '@/models/user';
import { UserContext, UserReducer } from '.';

const USER_INITIAL_STATE: UserState = {
  users: [],
  addUser: (arg0: UserData) => {},
  changeStatus: (arg0: UserData) => {},
  getUsers: () => {},
  deleteUser: (arg0: string) => {},
};
interface Props {
  children: React.ReactNode | undefined;
}

export const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, USER_INITIAL_STATE);
  const addUser = (user: UserData) => {};
  const changeStatus = (user: UserData) => {};
  const getUsers = () => {};
  const deleteUser = (id: string) => {};
  return (
    <UserContext.Provider value={{ ...state, addUser, changeStatus, getUsers, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
