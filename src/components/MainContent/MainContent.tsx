import React from "react";

export const MainContent: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => {
  if (Array.isArray(children))
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            {children.map((Item: React.ReactElement) => Item)}
          </div>
        </div>
      </main>
    );
};
