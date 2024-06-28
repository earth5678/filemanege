import React from 'react'
import Nav from "@/components/Nav/header"


export default function index() {
  const fileData = [
    {
      id: 1,
      fileName: "Passenger Profile.csv",
      fileType: "csv",
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
  
  const TableRow = ({ id, fileName, fileType, lastViewed }) => (
    <tr className="card-custom1">
      <th scope="row">{id}</th>
      <td>{fileName}</td>
      <td>{fileType}</td>
      <td>{lastViewed}</td>
    </tr>
  );
  return (
    <>
    <Nav />

    <div className='container'>
    <table class="table table-borderless table-hover mt-5">
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
    </div>
  </>
  )
}
