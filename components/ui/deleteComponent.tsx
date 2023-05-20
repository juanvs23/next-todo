import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { EntriesContext } from '@/context/entries';
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
  const { deleteEntry } = useContext(EntriesContext);
  const handlerClick = () => {
    deleteEntry(id);
  };
  return (
    <ButtonIcon onClick={handlerClick}>
      <DeleteIcon color="error" />
    </ButtonIcon>
  );
};

export default DeleteComponent;
