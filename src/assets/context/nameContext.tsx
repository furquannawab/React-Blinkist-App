import { createContext } from "react";

const nameContext = createContext({
  name: "",
  setName: (name: string) => {},
});

export default nameContext;
