import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { getNotes } from "../services/user.service";
import { ACTIONS } from "../utils/constants";
import { initialValue, reducer } from "../utils/reducer";
import { useAuth } from "./auth-context";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        try {
          setLoader(true);
          const notesResponse = await getNotes({ token: user.token });
          if (notesResponse.data.notes) {
            dispatch({
              type: ACTIONS.SetNotes,
              payload: { notes: notesResponse.data.notes },
            });
          }
          setLoader(false);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [user.token]);

  return (
    <DataContext.Provider value={{ state, dispatch, loader, setLoader }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("Data context was not created");

  return context;
};

export { useData, DataProvider };
