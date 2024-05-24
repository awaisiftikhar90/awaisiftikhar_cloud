export default function Counters() {
    return (
        <>
            <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="3">0</strong>
                  <span>Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="20">0</strong>
                  <span>Completed Projects</span>
                </div>
              </div>
            </div>
            {/* <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="1200">0</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div> */}
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number="500">0</strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-hireme img margin-top" style={{backgroundImage: `url("images/bg_1.jpg")`}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center">
              <h2>I'm <span>Available</span> for Fulltime W2 Employement in US</h2>
              {/* <p></p> */}
              <p className="mb-0"><a target="_blank" href="https://www.linkedin.com/in/awaisiftikhar90/" className="btn btn-primary py-3 px-5">Hire me</a></p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}