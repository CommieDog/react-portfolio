import NavbarLink from "./NavbarLink";

function Header(props) {
  return (
    <header>
      <h1>John Netzel</h1>
      <h2>Aspiring Web Developer</h2>
      <nav>
        <ul>
          <li><NavbarLink name="About Me" isActivePage={props.isActivePage} onSetPage={props.onSetPage} /></li>
          <li><NavbarLink name="Portfolio" isActivePage={props.isActivePage} onSetPage={props.onSetPage} /></li>
          <li><NavbarLink name="Contact" isActivePage={props.isActivePage} onSetPage={props.onSetPage} /></li>
          <li><NavbarLink name="Resume" isActivePage={props.isActivePage} onSetPage={props.onSetPage} /></li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;