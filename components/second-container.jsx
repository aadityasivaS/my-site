export default function SecondContainer() {
  return (
    <div className="overflow-hidden">
      <div id="about">
        <div
          className="row"
          className="text-center"
          style={{ margin: "70px auto" }}
        >
          <div className="col">
            <div className="row" data-aos="fade-down-left">
              <div className="col-lg-6 col-md-12">
                <img
                  src="/images/Person.png"
                  alt="person"
                  style={{ width: "20em" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div className="row text-lg-start">
                  <div className="col-12">
                    <h1 className="comfortaa-font display-3">About Me</h1>
                    <br />
                  </div>
                  <div className="col-12">
                    <p className="fs-3">
                      👋 I am Aadityasiva Sabarinathan welcome to my site I am a
                      cross platform developer and a graphic designer. I develop
                      for mobile, desktop, web and packages for other
                      developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
