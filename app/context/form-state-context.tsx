import { createContext } from "react";

export const FormStateContext = createContext<{ id: string }>({ id: "" });
