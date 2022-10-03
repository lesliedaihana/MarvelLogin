import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const ContextUser = ({ children }) => {
  const [user, setUser] = useState({ username: "", token: "" });

  useEffect(() => {
    const restoredSession = JSON.parse(localStorage.getItem("session"));
    if (restoredSession) {
      setUser(restoredSession);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user).length === 0) return;
    localStorage.setItem("session", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextUser;
