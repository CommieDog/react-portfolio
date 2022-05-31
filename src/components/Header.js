import portrait from "../assets/images/profile-picture-small.jpg"
import NavbarLink from "./NavbarLink";

function Header(props) {
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
            <li><NavbarLink name="About Me" onSetPage={props.onSetPage} /></li>
            <li><NavbarLink name="Portfolio" onSetPage={props.onSetPage} /></li>
            <li><NavbarLink name="Contact" onSetPage={props.onSetPage} /></li>
            <li><NavbarLink name="Resume" onSetPage={props.onSetPage} /></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;