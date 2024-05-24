export default function Footer() {
    return (
        <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>Full-stack engineer with 3+ years' experience crafting innovative web solutions and RESTful APIs.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><a href="https://x.com/awaisiftikhar90"><span className="icon-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.facebook.com/awaisiftikhar786/"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="https://www.instagram.com/awaisiftikhar90/"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Skills</a></li>
                  {/* <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li> */}
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Skills</h2>
                <ul className="list-unstyled">
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Java</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>C#</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Angular</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>React</a></li>
                  <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>AWS</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">Appleton, WI, US</span></li>
                    <li><a href="tel://12024076174"><span className="icon icon-phone"></span><span className="text">+1-202-407-6174</span></a></li>
                    {/* <li><a href="#"><span className="icon icon-envelope"></span><span className="text">awais.iftikhar.satti@gmail.com</span></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">

              <p>Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="/" target="_blank">Awais Iftikhar</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
}