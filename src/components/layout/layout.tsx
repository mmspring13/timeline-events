import { PropsWithChildren } from "react";
import "./style.scss";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="app-layout max-w-[90rem] h-full w-full border-line border-l border-r flex">
      {children}
    </div>
  );
};
