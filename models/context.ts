import React from 'react';
export interface IUPropsContext {
  theme: 'light' | 'dark';
  openMenu: boolean;
  openModal: boolean;
  isDraggging: boolean;
  setTheme: (arg0: string) => void;
  setopenMenu: () => void;
  setopenModal: () => void;
  setDraging: (arg0: string) => void;
}
export interface IUState {
  theme: 'light' | 'dark';
  openMenu: boolean;
  openModal: boolean;
  isDraggging: boolean;
}
export interface EntriesState {
  entries: Entry[];
  addNewEntry: (arg0: Entry) => void;
  updateEntry: (arg0: Entry) => void;
  refreshData: () => void;
  deleteEntry: (arg0: string) => void;
}
export interface Entry {
  _id?: string;
  title: string;
  description?: string;
  userID?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: EntryStatus;
}
export type EntryStatus = 'pending' | 'inProgress' | 'Completed' | 'deleted';
export interface EntryProps {
  status: EntryStatus;
}
export interface EntryInputData {
  title: string;
  description: string;
}
export type ActionType = {
  type:
    | 'DARK_THEME'
    | 'OPEN_MENU'
    | 'LIGHT_THEME'
    | 'OPEN_MODAL'
    | 'IS_DRAG_FALSE'
    | 'IS_DRAG_TRUE';
  payload?: boolean;
};
export interface EditInputProp {
  id: string | undefined;
  text: string;
  sourge: 'title' | 'description';
  entry: Entry;
}
