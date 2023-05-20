import React, { useReducer, useState } from "react";
import { ChildrenComponent } from "../../models";
import { UIContext } from "./UIContext";
import { uiUseReducer } from "./useReducer";
import { IUPropsContext, IUState } from "@/models";

const INITIAL_STATE: IUState = {
  theme: "light",
  openMenu: false,
  openModal: false,
  isDraggging: false,
};

type childrenProps = {
  children: React.ReactNode;
};
export const UIProvider = ({ children }: childrenProps) => {
  /* const [theme, setTheme] = useState<IUPropsContext["theme"]>(
    INITIAL_STATE.theme
  ); */
  const [UIstate, dispatch] = useReducer(uiUseReducer, INITIAL_STATE);
  const setopenMenu = () => {
    dispatch({ type: "OPEN_MENU" });
  };
  const setopenModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  const setTheme = (string: string) => {
    switch (string) {
      case "dark":
        dispatch({ type: "DARK_THEME" });
        break;

      default:
        dispatch({ type: "LIGHT_THEME" });
        break;
    }
  };
  const setDraging = (draggingState: string) => {
    switch (draggingState) {
      case "DragStart":
        dispatch({ type: "IS_DRAG_TRUE" });
        break;
      case "DragEnd":
        dispatch({ type: "IS_DRAG_FALSE" });
        break;
    }
  };
  // console.log(UIstate);
  return (
    <UIContext.Provider
      value={{ ...UIstate, setopenMenu, setTheme, setopenModal, setDraging }}
    >
      {children}
    </UIContext.Provider>
  );
};
