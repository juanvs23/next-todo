import React, { useState, useContext } from 'react';
import {
  Button,
  Fab,
  Box,
  Modal,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/add';
import { EntriesContext } from '@/context/entries';
import { Entry, EntryInputData } from '@/models';
import { UIContext } from '@/context/ui';
import { createAxios } from '@/axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};
const NewEntry = () => {
  //const [openModal, setopenModal] = useState<boolean>(false);
  const { openModal, setopenModal } = useContext(UIContext);
  const [titleRef, settitleRef] = useState<string>('');
  const [touched, settouched] = useState<boolean>(false);
  const [descriptionRef, setdescriptionRef] = useState<string>('');
  const { addNewEntry } = useContext(EntriesContext);
  const hanclerClick = () => {
    settouched(false);
    setopenModal();
    setdescriptionRef('');
    settitleRef('');
  };
  const clickData = async () => {
    if (titleRef.length <= 0) {
      settouched(true);
    } else {
      const newEntry: Entry = {
        title: titleRef,
        description: descriptionRef,
        status: 'pending',
        createAt: '',
        updateAt: '',
      };
      const { data } = await createAxios.post('/entries/addentry', newEntry);
      console.log(data);
      if (data.status == 200) {
        const { entry } = data.data;
        entry.status = 'pending';
        addNewEntry(entry);
        hanclerClick();
      }
    }
  };
  return (
    <>
      <Box>
        <Fab onClick={hanclerClick} color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <Modal
        open={openModal}
        onClose={hanclerClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ background: 'transparent' }}>
            <CardHeader title="Ingrese su nueva actividad" />
            <CardContent>
              <FormControl sx={{ minWidth: '100%' }}>
                <Box sx={{ display: 'block', paddingBottom: '20px' }}>
                  <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Titulo de la actividad"
                    placeholder="Ejem: Calcular los impuestos"
                    variant="standard"
                    aria-describedby="title"
                    value={titleRef}
                    onFocus={() => settouched(false)}
                    error={titleRef.length <= 0 && touched}
                    onChange={e => settitleRef(e.target.value)}
                  />
                  <FormHelperText id="title">Permite crear la actividad</FormHelperText>
                </Box>
                <Box sx={{ display: 'block', paddingBottom: '20px' }}>
                  <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Descripción de la actividad"
                    placeholder="Sacar varias cuentas con una calculadora"
                    multiline
                    variant="standard"
                    aria-describedby="description"
                    value={descriptionRef}
                    onChange={e => setdescriptionRef(e.target.value)}
                  />
                  <FormHelperText id="description">Permite agregar un texto extra</FormHelperText>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                  onClick={clickData}
                >
                  <Button variant="contained" color="primary">
                    Crear Actividad
                  </Button>
                  <Button variant="contained" color="error" onClick={hanclerClick}>
                    Cancelar
                  </Button>
                </Box>
              </FormControl>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default NewEntry;
