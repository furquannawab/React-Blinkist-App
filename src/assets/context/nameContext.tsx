import { createContext } from "react";

const nameContext = createContext({
  name: "",
  setName: (newName: string) => {},
});

export default nameContext;
