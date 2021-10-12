import { FooterContainer, FooterRow } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <div>
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday</li>
            <li>12:00am - 10:00pm</li>
            <li>Saturday - Sunday</li>
            <li>12:00am - 10:00pm</li>
          </ul>
        </div>

        <div>
          <h3>Our location</h3>
          <ul>
            <li>Street Name</li>
            <li>City Name</li>
            <li>Country Name</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>youremail@gmail.com</li>
            <li>555-555-555</li>
          </ul>
        </div>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
