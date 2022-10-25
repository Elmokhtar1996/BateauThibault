import { createContext } from "react";
import { StateInterface } from "../types";

export const ctx = createContext<StateInterface | null>(null)