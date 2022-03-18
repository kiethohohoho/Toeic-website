import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <h1 className="section-title">
          Contact <span>info</span>
        </h1>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">
              <img
                alt=""
                src="https://img.icons8.com/bubbles/100/000000/phone.png"
              />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>
                <a
                  href="tel:0347057544"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  0347057544
                </a>
              </h2>
              <h2>
                <a
                  href="\tel:0764599057"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  0764599057
                </a>
              </h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img
                alt=""
                src="https://img.icons8.com/bubbles/100/000000/new-post.png"
              />
            </div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>
                <Link
                  to="\mailto:kiethohohoho@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  kiethohohoho@gmail.com
                </Link>
              </h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <img
                alt=""
                src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
              />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>
                <a
                  href="https://www.google.com/maps/place/B%C3%ACnh+%C4%90%E1%BB%8Bnh,+Tx.+An+Nh%C6%A1n,+B%C3%ACnh+%C4%90%E1%BB%8Bnh,+Vi%E1%BB%87t+Nam/@13.8857828,109.0982502,15.2z/data=!4m5!3m4!1s0x316f3e1f5f5e3c27:0xd4f07bc71e6785c4!8m2!3d13.8860211!4d109.1077389?hl=vi-VN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Binh Dinh, Viet Nam
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
