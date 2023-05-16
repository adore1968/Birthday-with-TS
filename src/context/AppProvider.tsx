import { useState } from "react";
import data from "../data/data";
import { AppContext } from "../hooks/AppContext";
import { Birthday } from "../shared/types";

type Props = { children: JSX.Element };

export function AppProvider({ children }: Props) {
  const [birthdays, setBirthdays] = useState<Birthday[]>(data);
  return (
    <AppContext.Provider value={{ birthdays, setBirthdays }}>
      {children}
    </AppContext.Provider>
  );
}
