import { useState, useContext } from 'react';
import { EntriesContext } from '@/context/entries';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { EditInputProp, Entry } from '@/models';
import { TextField } from '@mui/material';

const EditWrpper = styled.div`
  display: flex;
  justify-content: 'center';
  .buttons {
    display: flex;
    justify-content: 'center';
    transition: 0.3s all;
    opacity: 0;
    gap: 5px;
    button {
      cursor: pointer;
      background: transparent;
      appearance: none;
      border: none;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
export default function EditInput(props: EditInputProp) {
  const [isditing, setIsditing] = useState(false);
  const [descriptionRef, setdescriptionRef] = useState('');
  const { id, text, sourge, entry } = props;
  const { updateEntry } = useContext(EntriesContext);
  const hanclerClick = () => {
    setIsditing(false);
    const updatedEntry: Entry = {
      ...entry,
      [sourge]: descriptionRef,
    };
    updateEntry(updatedEntry);
  };
  return (
    <EditWrpper>
      {isditing ? (
        <>
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
          <div className="buttons">
            <button onClick={hanclerClick}>
              <CheckIcon color="success" />
            </button>
            <button onClick={() => setIsditing(false)}>
              <CloseIcon color="error" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-item">{text}</div>
          <div className="buttons">
            <button onClick={() => setIsditing(true)}>
              <ModeEditIcon color="info" />
            </button>
          </div>
        </>
      )}
    </EditWrpper>
  );
}
