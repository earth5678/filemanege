import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Body() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
      <div
        id="kt_aside_menu"
        className="aside-menu min-h-lg-800px"
        data-menu-vertical="1"
        data-menu-scroll="1"
        data-menu-dropdown-timeout="500"
      >
        <ul className="menu-nav">
          <li className={`menu-item ${currentPath === "/" ? "menu-item-active" : ""}`} aria-haspopup="true">
            <Link href="/" className="menu-link menu-toggle">
              <span className="svg-icon menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path
                      d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="menu-text">Home</span>
            </Link>
          </li>
          <li
            className={`menu-item menu-item-submenu ${currentPath === "/files" ? "menu-item-open menu-item-active" : ""}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <Link href="/files" className="menu-link menu-toggle">
              <span className="svg-icon menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      opacity="0.3"
                    />
                    <rect
                      fill="#000000"
                      x="6"
                      y="11"
                      width="9"
                      height="2"
                      rx="1"
                    />
                    <rect
                      fill="#000000"
                      x="6"
                      y="15"
                      width="5"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
              </span>
              <span className="menu-text">Files</span>
            </Link>
          </li>
          <li
            className={`menu-item menu-item-submenu ${currentPath === "/recovery" ? "menu-item-open menu-item-active" : ""}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <Link href="/recovery" className="menu-link menu-toggle">
              <span className="svg-icon menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />
                    <path
                      d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              <span className="menu-text">Recovery</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
