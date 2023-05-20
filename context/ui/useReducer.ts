import { useReducer } from "react";
import { ActionType, IUPropsContext, IUState } from "@/models";
export const uiUseReducer = (state: IUState, action: ActionType): IUState => {
  switch (action.type) {
    case "DARK_THEME":
      return { ...state, theme: "dark" };
      break;
    case "LIGHT_THEME":
      return { ...state, theme: "light" };
      break;
    case "OPEN_MENU":
      const baseMEnu = state.openMenu === false ? true : false;
      return { ...state, openMenu: baseMEnu };
      break;
    case "IS_DRAG_TRUE":
      return { ...state, isDraggging: true };
      break;
    case "IS_DRAG_FALSE":
      return { ...state, isDraggging: false };
      break;
    case "OPEN_MODAL":
      const modal = state.openModal === false ? true : false;
      return { ...state, openModal: modal };
      break;
    default:
      return state;
      break;
  }
};
