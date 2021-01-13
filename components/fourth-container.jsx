export default function FourthContainer() {
  React.useEffect(() => {
    import("@rocktimsaikia/github-card");
  });
  return (
    <div id="projects" style={{ margin: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <github-card data-user="aadityasivaS"></github-card>
          </div>
          <div className="col m-5">
            <h1 className="display-1 comfortaa-font text-lg-start text-center">My Projects</h1>
            <p className="fs-3 text-lg-start text-center">
              You can checkout all my projects at my github account <a target="_blank" rel="noreferrer"href="https://github.com/aadityasivaS">aadityasivaS</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
