import React from 'react'
import Nav from "@/components/Nav/header"


export default function index() {
  return (
    <>
    <Nav />

    <div className='container'>
      <div id="kt_datatable_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_length" id="kt_datatable_length">
              <label>
                Show{' '}
                <select
                  name="kt_datatable_length"
                  aria-controls="kt_datatable"
                  className="custom-select custom-select-sm form-control form-control-sm"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>{' '}
                entries
              </label>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div id="kt_datatable_filter" className="dataTables_filter">
              <label>
                Search:
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder=""
                  aria-controls="kt_datatable"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped table-hover" id="kt_datatable" style={{ marginTop: '13px', width: '100%' }} role="grid" aria-describedby="kt_datatable_info">
              <thead>
                <tr role="row">
                  <th className="sorting_asc" tabIndex="0" aria-controls="kt_datatable" rowSpan="1" colSpan="1" style={{ width: '70px' }} aria-sort="ascending" aria-label="Order ID: activate to sort column descending">
                    Name
                  </th>
                  <th className="sorting" tabIndex="0" aria-controls="kt_datatable" rowSpan="1" colSpan="1" style={{ width: '109px' }} aria-label="Ship Country: activate to sort column ascending">
                    Size
                  </th>
                  <th className="sorting" tabIndex="0" aria-controls="kt_datatable" rowSpan="1" colSpan="1" style={{ width: '163px' }} aria-label="Deleted At: activate to sort column ascending">
                    Deleted At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td className="sorting_1 dtr-control">file01</td>
                  <td>235MB</td>
                  <td>2 hrs ago</td>
                </tr>
                <tr className="odd">
                  <td className="sorting_1 dtr-control">file01</td>
                  <td>235MB</td>
                  <td>2 hrs ago</td>
                </tr>
                <tr className="odd">
                  <td className="sorting_1 dtr-control">file01</td>
                  <td>235MB</td>
                  <td>2 hrs ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="kt_datatable_info" role="status" aria-live="polite">
              Showing 1 to 10 of 50 entries
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="pagination">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                {/* Continue with other pagination links */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
