import { createContext } from "react";
import { EntriesState } from "@/models";

export const EntriesContext = createContext({} as EntriesState);
