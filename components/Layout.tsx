import React from "react";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>home</li>
        {children}
      </nav>
    </div>
  );
}
export default Layout;
