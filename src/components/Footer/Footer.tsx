import {
  CopyrightContainer,
  FooterContainer,
  FooterIconsWrapper,
  NavContainer,
  NewsLetter,
} from "./styles";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import AmexIcon from "../icons/AmexIcon";
import BitcoinIcon from "../icons/BitcoinIcon";
import MasterCardIcon from "../icons/MasterCardIcon";
import VisaIcon from "../icons/VisaIcon";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <NavContainer>
        <div>
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="#">Compliance</a>
            </li>
            <li>
              <a href="#">Credits</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>HELP</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Discount coupons</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">F.A.Q</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Medias</h3>
          <FooterIconsWrapper>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
          </FooterIconsWrapper>
        </div>
        <div>
          <h3>Payment</h3>
          <FooterIconsWrapper>
            <AmexIcon />
            <BitcoinIcon />
            <MasterCardIcon />
            <VisaIcon />
          </FooterIconsWrapper>
        </div>
        <NewsLetter>
          <h3>News Letter</h3>
          <div>
            <input placeholder="Insert your e-mail here!" type="text" />
            <button>Send</button>
          </div>
        </NewsLetter>
      </NavContainer>
      <CopyrightContainer>
        © Copyright {year} <span>JVP Store</span>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
