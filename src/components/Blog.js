export default function Blog() {
    return (
        <section className="ftco-section" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Blog</h1>
              <h2 className="mb-4">Our Blog</h2>
              <p></p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-12 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a target="_blank" rel="noreferrer" href="https://medium.com/@awais.iftikhar.satti/understanding-cloud-basics-api-gateway-and-lambda-keep-your-api-traffic-secure-461983854be6" className="block-20" style={{backgroundImage: `url("https://miro.medium.com/v2/resize:fit:720/format:webp/1*6h1dkkm8Ia-kxujfuKdieA.png")`}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">May 24, 2024</span>
                      <a href="/" className="mr-2">Awais Iftikhar</a>
                      {/* <a href="/" className="meta-chat"><span className="icon-chat"></span> 3</a> */}
                    </p>
                  </div>
                  <h3 className="heading"><a target="_blank" rel="noreferrer" href="https://medium.com/@awais.iftikhar.satti/understanding-cloud-basics-api-gateway-and-lambda-keep-your-api-traffic-secure-461983854be6">Understanding Cloud Basics: API Gateway and Lambda (Keep your API traffic secure.)</a></h3>
                  <p></p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a href="single.html" className="block-20" style={{backgroundImage: `url("images/image_2.jpg")`}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                    </p>
                  </div>
                  <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a href="single.html" className="block-20" style={{backgroundImage: `url("images/image_3.jpg")`}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                    </p>
                  </div>
                  <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    )
}