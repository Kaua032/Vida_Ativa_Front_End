import { createContext, useState } from "react";

export const Usercontext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
}
