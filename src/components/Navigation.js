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

    function getNavLinkClass(pageName)
    {
      if(props.isActivePage(pageName))
      {
        return "nav-link active";
      }
      return "nav-link";
    }

    return (
      <nav>
        <ul className="nav">
          <li className="nav-item"><a className={getNavLinkClass("About Me")} href={getHref("About Me")} onClick={() => props.onSetPage("About Me")}>About Me</a></li>
          <li className="nav-item"><a className={getNavLinkClass("Portfolio")} href={getHref("Portfolio")} onClick={() => props.onSetPage("Portfolio")}>Portfolio</a></li>
          <li className="nav-item"><a className={getNavLinkClass("Contact")} href={getHref("Contact")} onClick={() => props.onSetPage("Contact")}>Contact</a></li>
          <li className="nav-item"><a className={getNavLinkClass("Resume")} href={getHref("Resume")} onClick={() => props.onSetPage("Resume")}>Resume</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;