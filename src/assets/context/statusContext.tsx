import { createContext } from "react";

const statusContext = createContext({
  status: "reading",
  setStatus: (status: string) => {},
});

export default statusContext;
