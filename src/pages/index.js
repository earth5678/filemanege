import React, { useState } from "react";
import Nav from "@/components/Nav/header";

const customerData = [
  {
    customerId: 1,
    customerName: "John Doe",
    files: [
      {
        imgSrc: "assets/media/svg/files/csv.svg",
        linkText: "Passenger Profile.csv",
      },
      {
        imgSrc: "assets/media/svg/files/zip.svg",
        linkText: "December 2019 Flights.zip",
      },
    ],
  },
  {
    customerId: 2,
    customerName: "Jane Smith",
    files: [
      {
        imgSrc: "assets/media/svg/files/jpg.svg",
        linkText: "Corporate Booking Docum...",
      },
      {
        imgSrc: "assets/media/svg/files/mp4.svg",
        linkText: "Video Tutorial.mp4",
      },
    ],
  },
  {
    customerId: 3,
    customerName: "Alice Johnson",
    files: [
      {
        imgSrc: "assets/media/svg/files/csv.svg",
        linkText: "Project Plan.docx",
      },
      {
        imgSrc: "assets/media/svg/files/jpg.svg",
        linkText: "Event Photos.jpg",
      },
    ],
  },
  {
    customerId: 4,
    customerName: "พี่นิดหน่อย ทดสอบ",
    files: [
      {
        imgSrc: "assets/media/svg/files/csv.svg",
        linkText: "Project Plan.docx",
      },
      {
        imgSrc: "assets/media/svg/files/jpg.svg",
        linkText: "Event Photos.jpg",
      },
    ],
  },
  {
    customerId: 5,
    customerName: "พี่ชาญ ทดสอบ",
    files: [
      {
        imgSrc: "assets/media/svg/files/csv.svg",
        linkText: "Project Plan.docx",
      },
      {
        imgSrc: "assets/media/svg/files/jpg.svg",
        linkText: "Event Photos.jpg",
      },
    ],
  },
  {
    customerId: 6,
    customerName: "เอิร์ท ทดสอบ",
    files: [
      {
        imgSrc: "assets/media/svg/files/csv.svg",
        linkText: "Project Plan.docx",
      },
      {
        imgSrc: "assets/media/svg/files/jpg.svg",
        linkText: "Event Photos.jpg",
      },
    ],
  },
];

const fileData = [
  {
    id: 1,
    fileName: "Passenger Profile.psd",
    fileType: "psd",
    lastViewed: "2023-01-15",
  },
  {
    id: 2,
    fileName: "December 2019 Flights.csv",
    fileType: "csv",
    lastViewed: "2023-01-20",
  },
  {
    id: 3,
    fileName: "Corporate Booking Docum...",
    fileType: "jpg",
    lastViewed: "2023-02-10",
  },
  {
    id: 4,
    fileName: "Video Tutorial.mp4",
    fileType: "mp4",
    lastViewed: "2023-02-15",
  },
  {
    id: 5,
    fileName: "Project Plan.docx",
    fileType: "docx",
    lastViewed: "2023-02-25",
  },
];

const CustomerCard = ({ customer, onClick }) => (
  <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
    <div className="card card-custom gutter-b card-stretch" onClick={onClick}>
      <div className="card-body">
        <div className="d-flex flex-column align-items-center">
          <img
            alt=""
            className="max-h-65px"
            src="assets/media/svg/files/user.svg"
          />
          <a
            href="#"
            className="text-dark-75 font-weight-bold mt-15 font-size-lg"
          >
            {customer.customerName}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const FileCard = ({ file }) => (
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div className="card card-custom gutter-b card-stretch">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center">
          <img alt="" className="max-h-65px" src={file.imgSrc} />
          <a
            href="#"
            className="text-dark-75 font-weight-bold mt-15 font-size-lg"
          >
            {file.linkText}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TableRow = ({ id, fileName, fileType, lastViewed }) => (
  <tr className="card-custom1">
    <th scope="row">{id}</th>
    <td>{fileName}</td>
    <td>{fileType}</td>
    <td>{lastViewed}</td>
  </tr>
);

export default function Index() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCustomerClick = (customer) => {
    console.log("Customer clicked:", customer);
    setLoading(true);
    setTimeout(() => {
      setSelectedCustomer(customer);
      setLoading(false);
    }, 1000);
  };

  const handleBackClick = () => {
    setSelectedCustomer(null);
  };

  return (
    <>
      <Nav />
      {loading && (
        <div className="overlay1">
          <div class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div className={`container ${loading ? "blur1" : ""}`}>
        {!selectedCustomer ? (
          <div className="row mt-4">
            {customerData.map((customer) => (
              <CustomerCard
                key={customer.customerId}
                customer={customer}
                onClick={() => handleCustomerClick(customer)}
              />
            ))}
          </div>
        ) : (
          <>
            <button
              className="btn btn-secondary mb-4"
              onClick={handleBackClick}
            >
              กลับ
            </button>
            <div className="row mt-4">
              {selectedCustomer.files.map((file, index) => (
                <FileCard key={index} file={file} />
              ))}
            </div>
          </>
        )}

        <div className="mt-2">
          <div className="font-size-h4">Recent</div>
          {/* start add table */}
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">fileType</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {fileData.map((row) => (
                <TableRow key={row.id} {...row} />
              ))}
            </tbody>
          </table>
          {/* end add table */}
        </div>
      </div>
    </>
  );
}
