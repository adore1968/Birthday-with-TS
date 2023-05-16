import { Dispatch, SetStateAction } from "react";

export interface AppProviderValue {
  birthdays: Birthday[];
  setBirthdays: Dispatch<SetStateAction<Birthday[]>>;
}

export interface Birthday {
  id: number;
  name: string;
  age: number;
  image: string;
}
