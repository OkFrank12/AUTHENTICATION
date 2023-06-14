import React, { PropsWithChildren } from "react";

const Children: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>This is register</div>
      <div>{children}</div>
    </div>
  );
};

export default Children;
