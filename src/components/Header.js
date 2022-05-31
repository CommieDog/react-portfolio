import portrait from "../assets/images/profile-picture-small.jpg"
import NavbarLink from "./NavbarLink";

function Header() {
    return (
      <header>
        <h1>John Netzel</h1>
        <img src={portrait} alt="Portrait of John Netzel" title="Hello there!"/>
        <h2>Aspiring Web Developer</h2>
        <div>
          <p>3309 Rose Street</p>
          <p>Anchorage, Alaska 99508</p>
          <p>johnrnetzel@gmail.com</p>
        </div>
        <nav>
          <ul>
            <li><NavbarLink name="About Me" /></li>
            <li><NavbarLink name="Portfolio" /></li>
            <li><NavbarLink name="Contact" /></li>
            <li><NavbarLink name="Resume" /></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;