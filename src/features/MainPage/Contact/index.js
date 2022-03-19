import Container from "components/Container";
import LayoutMainPage from "components/LayoutMainPage";
import { infoContacts } from "contants";
import "./Contact.scss";
import ContactItem from "./ContactItem";

function Contact() {
  const renderInfoContacts = (contacts) => {
    return (
      contacts.length &&
      contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))
    );
  };

  return (
    <LayoutMainPage>
      <Container>
        <section id="contact">
          <div className="contact px-30 flex-col-center">
            <h1 className="title mb-10">
              Thông tin <span>liên lạc</span>
            </h1>
            <div className="contact-items flex-row-between">
              {renderInfoContacts(infoContacts)}
            </div>
          </div>
        </section>
      </Container>
    </LayoutMainPage>
  );
}

export default Contact;
