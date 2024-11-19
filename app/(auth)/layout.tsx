import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen max-w-sm sm:max-w-md mx-auto px-4">
      {children}
    </div>
  );
};

export default Layout;
