import { createContext } from "react";

const statusContext = createContext({
  status: "reading",
  setStatus: (status: string) => undefined,
});

export default statusContext;
