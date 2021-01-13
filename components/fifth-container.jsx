export default function FifthContainer() {
  return (
    <>
      <div id="contact" className="bg-primary overflow-hidden text-center" style={{ color: "white" }}>
        <div className="container" style={{ padding: "50px 0" }}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="display-1 comfortaa-font">Contact Me</h1>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <button type="button" className="btn btn-outline-light btn-lg fs-2" onClick={() => {
                window.location.href = "mailto:me@aadityasiva.cf";
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>  me@aadityasiva.cf
              </button>
              <p className="fs-5" style={{marginTop: '25px', fontWeight: '300'}}>© {new Date().getFullYear()} Aadityasiva</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
