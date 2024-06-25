import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "@/components/Sidebar/body"

export default function Sidebar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        var offcanvasElementList = [].slice.call(
          document.querySelectorAll(".offcanvas")
        );
        var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
          return new window.bootstrap.Offcanvas(offcanvasEl);
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, []); 

  return (
    <>
      <button
        className="btn btn-icon aside-toggle ml-n3 mr-20"
        id="kt_aside_desktop_toggle"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <span className="svg-icon svg-icon-xxl svg-icon-dark-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <rect
                fill="#000000"
                opacity="0.3"
                x="4"
                y="5"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.3"
                x="4"
                y="13"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <path
                d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title textBold" id="offcanvasExampleLabel">
            File Manager
          </h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <Body />
          </div>
        </div>
      </div>
    </>
  );
}
