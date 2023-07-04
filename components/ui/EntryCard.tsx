import React, { FC, DragEvent, useContext } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import { Entry } from '@/models';
import { UIContext } from '@/context/ui';
import EditInput from './editInput';
import DeleteComponent from './deleteComponent';
import { dateFunctions } from '@/utils';

interface EntryProp {
  entry: Entry;
}
const EntryCard: FC<EntryProp> = ({ entry }: EntryProp) => {
  const { _id, title, description, createdAt, status } = entry;
  const { setDraging, isDraggging } = useContext(UIContext);
  // let current = Math.floor(date);
  console.log(createdAt);

  // "IS_DRAG_FALSE"
  // "IS_DRAG_TRUE";
  const onDragEnd = (e: DragEvent) => setDraging('DragEnd');
  const onDragStart = (e: DragEvent) => {
    // console.log(e);
    e.dataTransfer.setData('id', _id || '');
    setDraging('DragStart');
  };
  // const elapsed = currentDate - date
  return (
    <Card
      draggable
      sx={{
        marginTop: 0,
        margin: '0 15px',
        marginBottom: '1.5rem',
        background: 'secondary',
      }}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} variant="h5">
            <EditInput entry={entry} id={_id} sourge="title" text={title || ''} />
          </Typography>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            <EditInput entry={entry} id={_id} sourge="description" text={description || ''} />
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'pre-line',
              display: 'block',
              width: '100%',
            }}
          >
            <Box component="span" sx={{ fontWeight: 'bold', float: 'left' }}>
              {status === 'Completed' && <DeleteComponent id={_id || ''} />}
              <Link href={`/entries/${_id}`}>
                <VisibilityIcon color="primary" />
              </Link>
            </Box>
            <Box
              component="span"
              sx={{ fontWeight: 'bold', float: 'right', paddingTop: '4px' }}
            >{`Hace ${dateFunctions.showDate(entry.createdAt.toString())}`}</Box>
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
