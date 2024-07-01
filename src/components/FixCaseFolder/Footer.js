import logo from "../../assets/images/logo_footer.png";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </div>
  );
}

export default Footer;
