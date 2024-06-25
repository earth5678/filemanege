import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from 'react-bootstrap';
import Linkcss from "@/pages/link";
import Uploard from "../uploard/uploard";

export default function Dropdown() {

  const [fileModal, setFileModal] = useState(false);

  const handleCloseFile = () => setFileModal(false);
  const handleShowFile = (e) => {
    e.preventDefault();
    setFileModal(true);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
 
      <div className="dropdown" ref={dropdownRef}>
        <div className="topbar-item mr-4" onClick={toggleDropdown}>
          <div className="btn font-weight-bolder btn-sm btn-light-success px-5">
            Create Folder
          </div>
        </div>
        {showDropdown && (
          <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md show">
            <ul className="navi py-3">
              <li className="navi-item">
                <a href="#" className="navi-link" onClick={handleShowFile}>
                  <span className="navi-icon">
                    <i className="flaticon2-drop"></i>
                  </span>
                  <span className="navi-text">Upload File</span>
                </a>
              </li>

              <li className="navi-item">
                <a href="#" className="navi-link">
                  <span className="navi-icon">
                    <i className="flaticon2-list-3"></i>
                  </span>
                  <span className="navi-text">Create File</span>
                </a>
              </li>

              <li className="navi-item">
                <a href="#" className="navi-link">
                  <span className="navi-icon">
                    <i className="flaticon2-gear"></i>
                  </span>
                  <span className="navi-text">Create Folder</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Modal
        show={fileModal}
        onHide={handleCloseFile}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Uploard />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFile}>
            Close
          </Button>
          <Button variant="primary" onClick={() => console.log('Save changes')}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
