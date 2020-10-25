import React from "react";
import "./loading.css";
function Loading() {
  return (
    <div className="vh-100 gbBlueBg">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
        </div>
        <div className="text-white">Loading...</div>
      </div>
    </div>
  );
}

export default Loading;
