import { createContext } from "react";

const nameContext = createContext({
  name: "",
  setName: (name: string) => undefined,
});

export default nameContext;
