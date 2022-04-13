import { createContext, useEffect } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!userInfo) return;
  }, []);
};
