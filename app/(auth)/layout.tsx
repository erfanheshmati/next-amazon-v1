import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen mx-auto px-4">
      {children}
    </div>
  );
};

export default Layout;
