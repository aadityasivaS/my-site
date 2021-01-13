export default function TopContainer() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top z4">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" href="#">
            Aadityasiva
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav fs-5">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  My Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-primary nodge">
        <div className="top-container text-center overflow-hidden">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6 text-lg-start text-center">
              <h1 className="display-1 comfortaa-font">I'm Aadityasiva</h1>
              <h2 className="fs-1">A cross platform developer</h2>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img
                src="/images/PersonOnLaptop.png"
                className="img-fluid"
                alt="person_on_laptop"
                style={{ width: "35em" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
