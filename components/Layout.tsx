import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-lightgray py-8 min-h-full absolute w-full">
      {children}
    </div>
  );
}
