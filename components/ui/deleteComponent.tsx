import DeleteIcon from '@mui/icons-material/Delete';
import {
  Container,
  Typography,
  Box,
  Card,
  Modal,
  CardHeader,
  Button,
  CardContent,
} from '@mui/material';
import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import { EntriesContext } from '@/context/entries';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'transparent',

  boxShadow: 'none',
  p: 4,
};

const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.4;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const DeleteComponent = ({ id }: { id: string }) => {
  const [openModal, setopenModal] = useState(false);
  const { deleteEntry } = useContext(EntriesContext);

  const handlerModal = () => {
    setopenModal(openModal => !openModal);
  };
  const handlerClick = () => {
    deleteEntry(id);
  };
  return (
    <>
      <ButtonIcon onClick={handlerModal}>
        <DeleteIcon color="error" />
      </ButtonIcon>
      <Modal
        open={openModal}
        onClose={handlerModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ bgcolor: 'paper.secondary' }}>
            <CardHeader title="Desea borrar esta actividad?" />
            <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button variant="contained" color="error" onClick={handlerClick}>
                Si
              </Button>
              <Button variant="contained" color="primary" onClick={handlerModal}>
                Cancelar
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteComponent;
