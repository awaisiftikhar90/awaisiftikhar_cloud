export default function About() {
    return (
        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
            <div className="container">
            <div className="row d-flex">
                <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                    <div className="overlay"></div>
                    <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage:`url(me.png)`}}>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate">
                    <h1 className="big">About</h1>
                    <h2 className="mb-4">About Me</h2>
                    <p>Full-stack engineer with 3+ years' experience crafting innovative web solutions and RESTful APIs.</p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                        <li className="d-flex"><span>Name:</span> <span>Awais Iftikhar</span></li>
                        <li className="d-flex"><span>Address:</span> <span>Appleton, WI</span></li>
                        <li className="d-flex"><span>Email:</span> <span>awais.iftikhar.satti@gmail.com</span></li>
                        <li className="d-flex"><span>Phone: </span> <span>+1-202-407-6174</span></li>
                    </ul>
                    </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                    <div className="text">
                    <p className="mb-4">
                        <span className="number" data-number="20">20</span>
                        <span> Projects complete</span>
                    </p>
                    <p><a target="_blank" href="/Resume.pdf" className="btn btn-primary py-3 px-3">Download CV</a></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}