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
import { Entry } from '@/models';
import { UIContext } from '@/context/ui';
import EditInput from './editInput';
import DeleteComponent from './deleteComponent';

interface EntryProp {
  entry: Entry;
}
const EntryCard: FC<EntryProp> = ({ entry }: EntryProp) => {
  const { _id, title, description, createdAt, status } = entry;
  const { setDraging, isDraggging } = useContext(UIContext);
  // let current = Math.floor(date);
  let date: Date = new Date(createdAt);
  let currentDate: Date = new Date();
  let elapsedYear = currentDate.getFullYear() - date.getFullYear(),
    elapsedMonth = currentDate.getMonth() + 1 - (date.getMonth() + 1),
    elapsedDay = currentDate.getDate() - date.getDate(),
    elapsedHour = currentDate.getHours() - date.getHours(),
    elapsedMinutes = currentDate.getMinutes() - date.getMinutes();

  const years = elapsedYear > 0 ? `${elapsedYear} años` : '';
  const months = elapsedMonth > 0 ? `${elapsedMonth} meses` : '';
  const days = elapsedDay > 0 ? `${elapsedDay} dias` : '';
  const hours = elapsedHour > 0 ? `${elapsedHour} horas` : '';
  const minutes = elapsedMinutes > 0 ? `${elapsedMinutes} minutos` : '';

  const dateString = `${years !== '' ? years + ' ' : ''}${months != '' ? months + ' ' : ''}${
    days != '' ? days + ' ' : ''
  }${hours != '' ? hours + ' ' : ''}${minutes != '' ? minutes + ' ' : ''} `;

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
            <EditInput entry={entry} id={_id} sourge="title" text={title} />
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
            </Box>
            <Box
              component="span"
              sx={{ fontWeight: 'bold', float: 'right', paddingTop: '4px' }}
            >{`Hace ${
              minutes == '' && hours == '' && days == '' && years == ''
                ? 'menos > 1 minuto'
                : dateString
            }`}</Box>
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
