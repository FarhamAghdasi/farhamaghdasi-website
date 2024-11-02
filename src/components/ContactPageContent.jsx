import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';

import React ,{useState}  from 'react'



const ContactPageContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://farhamaghdasi.ir/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setResponseMessage('Error: ' + error.message);
    }
  };
  return (
    <section className="contact-pg section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 valign">
          <div className="full-width md-mb80">
            <div className="sec-head md-mb80">
              <h2 className="text-u">
                Let's make your <br /> brand{" "}
                <span className="fw-200">brilliant!</span>
              </h2>
              <p className="mt-20 mb-20">
                If you would like to work with Me or just want to get in touch, I
                love to hear from you!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Address</h6>
                    <p>Amol County, Mazandaran Province, Iran</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Email</h6>
                    <a href='mailto:info@farhamaghdasi.ir'>info@farhamaghdasi.ir</a>
                    <a href='mailto:farhamaghdasi08@gmail.com'>farhamaghdasi08@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="phone fz-30 fw-600 mt-30 underline main-color">
                <a href="tel:+989391213094">+98 939 1213094</a>
              </div>
            </div>
            <ul className="rest social-text d-flex mt-60 fz-16">
              <li className="mr-30">
                <a href="https://t.me/farhamaghdasi" className="hover-this">
                  <span className="hover-anim">Telegram</span>
                </a>
              </li>
              <li className="mr-30">
                <a
                  href="https://github.com/FarhamAghdasi/"
                  className="hover-this"
                >
                  <span className="hover-anim">Github</span>
                </a>
              </li>
              <li className="mr-30">
                <a
                  href="https://www.linkedin.com/in/farham-aghdasi-b59101248/"
                  className="hover-this"
                >
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/farhamaghdasi"
                  className="hover-this"
                >
                  <span className="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 valign">
          <div className="full-width">
            <div className="sec-head mb-50">
              <h6 className="sub-head">
                Send a <span className="fw-200">message</span>
              </h6>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
      <div className="messages">{responseMessage}</div>
      <div className="controls row">
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-30">
            <input
              id="form_subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-30">
            <button
              type="submit"
              className="butn butn-md butn-bord butn-rounded"
            >
              <div className="d-flex align-items-center">
                <span>Let's Talking</span>
                <span className="icon ml-10">
                  <img src={common_imgs_iconsarrow_top_right} alt="" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default ContactPageContent