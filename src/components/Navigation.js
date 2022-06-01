import Nav from "react-bootstrap/Nav"

function Navigation(props) {
    /**
     * Converts a name property into an appropriate href value
     * @param {*} name the name of the NavbarLink
     * @returns the href value of the NavbarLink
     */
    function getHref(name)
    {
      name = name.toLowerCase();
      name = name.replace(" ", "-");
      return "#" + name;
    }
  
    // TODO replace with CSS class marker
    function getPageMarker(pageName)
    {
      if(props.isActivePage(pageName))
      {
        return "!";
      }
      return "";
    }

    return (
      <nav>
        <ul className={Nav}>
          <li><a href={getHref("About Me")} onClick={() => props.onSetPage("About Me")}>{"About Me" + getPageMarker("About Me")}</a></li>
          <li><a href={getHref("Portfolio")} onClick={() => props.onSetPage("Portfolio")}>{"Portfolio" + getPageMarker("Portfolio")}</a></li>
          <li><a href={getHref("Contact")} onClick={() => props.onSetPage("Contact")}>{"Contact" + getPageMarker("Contact")}</a></li>
          <li><a href={getHref("Resume")} onClick={() => props.onSetPage("Resume")}>{"Resume" + getPageMarker("Resume")}</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;