import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-lightgray  min-h-full absolute w-full">{children}</div>
  );
}

export default Layout;
