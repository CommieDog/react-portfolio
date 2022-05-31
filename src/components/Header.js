import Navigation from "./Navigation";

function Header(props) {
  return (
    <header>
      <h1>John Netzel</h1>
      <h2>Aspiring Web Developer</h2>
      <Navigation isActivePage={props.isActivePage} onSetPage={props.onSetPage} />
    </header>
  );
}

export default Header;