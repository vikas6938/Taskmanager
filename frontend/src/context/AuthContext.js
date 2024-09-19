import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Dummy login function (you can integrate real authentication here)
    setUser({ email });
    console.log('User logged in:', email);
  };

  const logout = () => {
    setUser(null);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Render children (the rest of your app) */}
    </AuthContext.Provider>
  );
};
