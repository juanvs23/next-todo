import React, { FC, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createAxios } from '@/axios';
import { Entry } from '../../models/context';
import { EntriesContext, EntriesReducer } from './';
import { EntriesState, EntryInputData } from '@/models';

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
  addNewEntry: arg0 => {},
  updateEntry: arg0 => {},
  refreshData: (): void => {},
  deleteEntry: arg0 => {},
};

interface Props {
  children: React.ReactNode | undefined;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (entry: Entry) => {
    const newData: Entry = entry;
    dispatch({ type: 'ADD_ENTRY', payload: [newData] });
  };
  const updateEntry = (entry: Entry) => {
    const { data } = createAxios.put(`/entries/updatentry`, entry);
    console.log(data);
    dispatch({ type: 'CHANGE_STATUS', payload: [entry] });
  };
  const refreshData = async () => {
    const { data } = await createAxios.get('/entries/getentries');
    const {
      status,
      data: { entries },
    } = data;
    if (status == 200) {
      dispatch({ type: 'GET_ENTRIES', payload: entries });
    }
  };
  const deleteEntry = async (entryId: string) => {
    const deleteEntry: { _id: string } = { _id: entryId };
    const { data } = await createAxios.put(`/entries/deleteentry`, deleteEntry);
    const {
      status,
      data: { entries },
    } = data;
    if (status == 200) {
      const removeEntry = state.entries.filter(entry => entry._id !== entryId);
      dispatch({ type: 'DELETE_ENTRY', payload: removeEntry });
    }
  };
  useEffect(() => {
    if (state.entries.length <= 0) {
      refreshData();
    }
  }, []);
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
        refreshData,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
