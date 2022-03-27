import React from "react";

export const Loader = () => {
  return (
    <div className="container">
      <div className="outer">
        <div className="inner">
          <div className="tomoe-circle-1">
            <div className="triangle-1"></div>
          </div>
          <div className="tomoe-circle-2">
            <div className="triangle-2"></div>
          </div>
          <div className="tomoe-circle-3">
            <div className="triangle-3"></div>
          </div>
          <div className="pupil"></div>
        </div>
      </div>
    </div>
  );
};
