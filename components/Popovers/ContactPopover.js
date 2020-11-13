import React from "react";
import { createPopper } from "@popperjs/core";

const ContactPopover = () => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className="bg-exp-red-500 active:bg-red-500 uppercase text-white font-bold hover:shadow-md shadow text-base px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            Contact Expert
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-white border-2 border-exp-red-500 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg max-w-350-px"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className="bg-white text-center text-exp-red-500 opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-400 uppercase rounded-t-lg"
              >
                Mobile Number : +94772317868
              </div>
              <div className="text-grey-600 p-3 text-center">
                The phone number displayed is sensitive data, please dont misuse them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopover;