import React from "react";

function ImageBox() {
  return (
    <>
      <div className="m-3 w-75 mx-auto">
        <div className="w-75 d-flex flex-row mx-auto justify-content-between">
          <img
            style={{ height: "auto", width: "74%" }}
            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="house 1"
          />
          <div className="w-25 d-flex flex-column justify-content-between">
            <img
              style={{ height: "49%", width: "100%" }}
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="house 2"
            />
            <img
              style={{ height: "49%", width: "100%" }}
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="house 3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageBox;
