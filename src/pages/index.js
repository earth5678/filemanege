import Nav from "@/components/Nav/header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Nav />
      <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/pdf.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  Technical Requiremnts.pdf
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/doc.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  Project Budget.docx
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/xml.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  Navitare Booking API.xml
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/html.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  User List.html
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/html.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  User List.html
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/html.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  User List.html
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/html.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  User List.html
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div class="card card-custom gutter-b card-stretch">
            <div class="card-header border-0">
              <h3 class="card-title"></h3>
              <div class="card-toolbar">
                <div
                  class="dropdown dropdown-inline"
                  data-toggle="tooltip"
                  title=""
                  data-placement="left"
                  data-original-title="Quick actions"
                >
                  <a
                    href="#"
                    class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ki ki-bold-more-hor"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                    <ul class="navi navi-hover py-5">
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-drop"></i>
                          </span>
                          <span class="navi-text">New Group</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-list-3"></i>
                          </span>
                          <span class="navi-text">Contacts</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-rocket-1"></i>
                          </span>
                          <span class="navi-text">Groups</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Calls</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-gear"></i>
                          </span>
                          <span class="navi-text">Settings</span>
                        </a>
                      </li>
                      <li class="navi-separator my-3"></li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-magnifier-tool"></i>
                          </span>
                          <span class="navi-text">Help</span>
                        </a>
                      </li>
                      <li class="navi-item">
                        <a href="#" class="navi-link">
                          <span class="navi-icon">
                            <i class="flaticon2-bell-2"></i>
                          </span>
                          <span class="navi-text">Privacy</span>
                          <span class="navi-link-badge">
                            <span class="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-column align-items-center">
                <img
                  alt=""
                  class="max-h-65px"
                  src="assets/media/svg/files/html.svg"
                />

                <a
                  href="#"
                  class="text-dark-75 font-weight-bold mt-15 font-size-lg"
                >
                  User List.html
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
