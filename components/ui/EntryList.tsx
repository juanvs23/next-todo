import React, { FC, useMemo, useContext, DragEvent } from 'react';
import { Box, Paper, List, ListItem } from '@mui/material';
import EntryCard from './EntryCard';
import { EntriesContext } from '@/context/entries';
import { EntryProps } from '@/models';
import NewEntry from './NewEntry';
import { UIContext } from '@/context/ui';
import styles from './EntryList.module.css';

const ButtonEntry = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <NewEntry />
    </Box>
  );
};
const EntryList: FC<EntryProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDraggging, setDraging } = useContext(UIContext);
  // console.log(entries);
  const entriesByStatus = useMemo(() => {
    console.log(entries);
    return entries.filter(entry => entry.status === status);
  }, [entries]);
  const addButton = () => (status === 'pending' ? <ButtonEntry /> : <></>);
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('id');
    const entry = entries.find(entry => entry._id === id)!;
    const updatedEntry = {
      ...entry,
      status,
    };
    updateEntry(updatedEntry);
    setDraging('DragEnd');
  };
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // console.log("DragOver", e);
  };
  return (
    <div onDrop={onDrop} onDragOver={allowDrop} className={isDraggging ? styles.isdraggging : ''}>
      <Paper
        sx={{
          height: 'calc(100vh - 300px)',
          backgroundColor: 'transparent',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        <>
          <List sx={{ opacity: isDraggging ? 0.3 : 1, transition: '0.4s' }}>
            {entriesByStatus.map(entry => (
              <EntryCard entry={entry} key={entry._id} />
            ))}
          </List>
          <div style={{ opacity: isDraggging ? 0 : 1, transition: '0.4s' }}>{addButton()}</div>
        </>
      </Paper>
    </div>
  );
};

export default EntryList;
