import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Copyright, FooterWrapper, Row, SocialLinks } from './FooterStyles';
import { List } from '@mui/material';

export default function Footer() {
    return(
        <FooterWrapper>
        <Row>
          <SocialLinks>
            <a href="#!"><FaFacebookF /></a>
            <a href="#!"><FaInstagram /></a>
            <a href="#!"><FaYoutube /></a>
            <a href="#!"><FaTwitter /></a>
          </SocialLinks>
        </Row>
  
        <Row>
          <List>
            <li><a href="#!">Contact us</a></li>
            <li><a href="#!">Our Services</a></li>
            <li><a href="#!">Privacy Policy</a></li>
            <li><a href="#!">Terms & Conditions</a></li>
            <li><a href="#!">Career</a></li>
          </List>
        </Row>
  
        <Row>
          <Copyright>
            INFERNO Copyright © 2024
          </Copyright>
        </Row>
      </FooterWrapper>
    )
}