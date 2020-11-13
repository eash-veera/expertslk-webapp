import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div>
      <div className="bg-cover fixed z-40 w-full h-full top-0 left-0 bg-white">
        <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
          <div className="block mb-4">
            <i className="fas fa-circle-notch animate-spin text-exp-red-500 mx-auto text-6xl"></i>
          </div>
          <h4 className="text-lg font-medium text-grey-600">
            Loading page contents for: {props.path}
          </h4>
        </div>
      </div>
      {/* <div className="top-0 left-0 w-full h-full block z-50 absolute"></div> */}
    </div>
  );
}
