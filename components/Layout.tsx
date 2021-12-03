import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-lightgray  min-h-full absolute w-full">{children}</div>
  );
}
