import { EntriesState, Entry } from '../../models';

type EntriesActionType = {
  type: 'ADD_ENTRY' | 'CHANGE_STATUS' | 'GET_ENTRIES' | 'DELETE_ENTRY';
  payload: Entry[];
};
export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'GET_ENTRIES':
      return {
        ...state,
        entries: action?.payload,
      };
    case 'ADD_ENTRY':
      return {
        ...state,
        entries: [...state.entries, action?.payload[0]],
      };
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: action?.payload,
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        entries: state.entries.map((entry: Entry) => {
          if (entry._id === action.payload[0]._id) return action.payload[0];
          return entry;
        }),
      };

    default:
      return state;
  }
};
