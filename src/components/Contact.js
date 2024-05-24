import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      if (!formData.subject.trim()) {
          newErrors.subject = 'Subject is required.';
          isValid = false;
      }

      if (!formData.message.trim()) {
          newErrors.message = 'Message is required.';
          isValid = false;
      }

      if (!formData.name.trim()) {
          newErrors.name = 'Name is required.';
          isValid = false;
      }

      if (!formData.email.trim()) {
          newErrors.email = 'Email is required.';
          isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid.';
          isValid = false;
      }

      setErrors(newErrors);
      return isValid;
  };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form
        if (!validateForm()) {
          return;
        }

        const apiUrl = 'https://n2vumam11h.execute-api.us-east-1.amazonaws.com/prod/contact';

        try {
          const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const responseData = await response.json();
          if (response.ok) {
                  alert('Email sent successfully!');
                  setFormData({
                      subject: '',
                      message: '',
                      name: '',
                      email: ''
                  });
                  setErrors({}); 
              } else {
                  throw new Error(responseData.message);
              }
          } catch (error) {
              alert('Failed to send email: ' + error.message);
          }
    };


    return (
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p></p>
            </div>
          </div>

          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-signs"></span>
                </div>
                <h3 className="mb-4">Address</h3>
                <p>Appleton, WI, US</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2"></span>
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p><a href="tel://12024076174">+1-202-407-6174</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p><a href="mailto:awais.iftikhar.satti@gmail.com">awais.iftikhar.satti@gmail.com</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-globe"></span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p><a href="/">awaisiftikhar.com</a></p>
              </div>
            </div>
          </div>

          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                  {errors.subject && <div style={{ color: 'red' }}>{errors.subject}</div>}
                </div>
                <div className="form-group">
                  <textarea name="message" cols="30" rows="7" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} ></textarea>
                  {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                </div>
              </form>
            
            </div>

            <div className="col-md-6 d-flex">
              <div className="img" style={{backgroundImage: `url("me.png")`}}></div>
            </div>
          </div>
        </div>
      </section>
    )
}