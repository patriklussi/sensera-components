import { createContext } from "react";
import { RootModel } from "./RootModel";

export const RootModelContext = createContext<RootModel>({} as RootModel);
