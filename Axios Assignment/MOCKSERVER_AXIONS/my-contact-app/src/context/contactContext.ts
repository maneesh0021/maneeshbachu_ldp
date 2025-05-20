import { createContext, useContext } from "react";
import type { Contact } from "../types/contact";

interface State {
  contacts: Contact[];
}

type Action =
  | { type: "SET_CONTACTS"; payload: Contact[] }
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "DELETE_CONTACT"; payload: number }
  | { type: "UPDATE_CONTACT"; payload: Contact };

export const initialState: State = {
  contacts: [],
};

export function contactReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };  
    default:
      return state;
  }
}

export const ContactContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const ContactProvider = ContactContext.Provider;
export const useContactContext = () => useContext(ContactContext);
