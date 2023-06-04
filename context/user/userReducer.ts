import { UserData, userStatus, UserState } from '@/models';

type UserActionType = {
  type: 'ADD_USER' | 'CHANGE_STATUS' | 'GET_USERS' | 'DELETE_USER';
  payload: UserData[];
};
export const UserReducer = (state: UserState, action: UserActionType): UserState => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action?.payload,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action?.payload[0]],
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: action?.payload,
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        users: state.users.map((user: UserData) => {
          if (user._id === action.payload[0]._id) return action.payload[0];
          return user;
        }),
      };
    default:
      return state;
  }
};
