import React, { Children, createContext, useEffect, useState } from "react";

export const webAppContext = createContext({});

const WebAppProvider = ({ children }) => {
  const [app, setApp] = useState(false);

  useEffect(() => {
    setApp(window.Telegram.WebApp);
  }, []);

  useEffect(() => {
    if (!app) return;
    app.ready && app.ready();
  }, [app]);

  return (
    <webAppContext.Provider value={app}>
      {children}
    </webAppContext.Provider>
  );
};

export default WebAppProvider;